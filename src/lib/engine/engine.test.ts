import { describe, it, expect } from 'vitest';
import { pasqua, festivoNazionale, eFestivo, nthGiorno, aggiungiGiorni } from './calendario';
import { cittaById, zonaDi, stato, periodoDate, panorama } from './orari';
import { multa, limiteNotifica } from './multa';

const z = (c: string, id: string) => { const ci = cittaById(c); if (!ci) throw new Error(c); const zo = ci.zone.find((x) => x.id === id); if (!zo) throw new Error(id); return zo; };

describe('calendario', () => {
  it('Pasqua (Meeus) per anni noti', () => {
    expect(pasqua(2026)).toBe('2026-04-05');
    expect(pasqua(2027)).toBe('2027-03-28');
    expect(pasqua(2028)).toBe('2028-04-16');
  });
  it('festività nazionali e Lunedì dell’Angelo', () => {
    expect(festivoNazionale('2026-04-06')).toBe('Lunedì dell’Angelo');
    expect(festivoNazionale('2026-08-15')).toContain('Ferragosto');
    expect(festivoNazionale('2026-06-29')).toBeNull(); // patrono di Roma non modellato
    expect(eFestivo('2026-11-15')).toBe(true); // domenica
    expect(eFestivo('2026-11-13')).toBe(false);
  });
  it('n-esimo giorno della settimana e somma di giorni', () => {
    expect(nthGiorno(2027, 4, 4, 1)).toBe('2027-04-01');
    expect(nthGiorno(2027, 10, 0, 1)).toBe('2027-10-03');
    expect(aggiungiGiorni('2026-12-31', 1)).toBe('2027-01-01');
  });
});

describe('orari', () => {
  it('Roma Centro Storico diurna: venerdì mattina attiva, domenica no, festivo no', () => {
    expect(stato(z('roma', 'centro-diurna'), '2026-11-13', '10:00').attiva).toBe(true);
    expect(stato(z('roma', 'centro-diurna'), '2026-11-15', '10:00').attiva).toBe(false);
    const nat = stato(z('roma', 'centro-diurna'), '2026-12-08', '10:00');
    expect(nat.attiva).toBe(false);
    expect(nat.motivo).toBe('festivo');
  });
  it('Roma notturna a cavallo della mezzanotte', () => {
    const s = stato(z('roma', 'centro-notturna'), '2026-11-14', '02:00'); // sabato 2:00, fascia del venerdì
    expect(s.attiva).toBe(true);
    expect(s.cambio).toEqual({ data: '2026-11-14', ora: '03:00' });
    expect(stato(z('roma', 'centro-notturna'), '2026-11-14', '03:30').attiva).toBe(false);
  });
  it('Roma notturna del Centro spenta in agosto, Trastevere notturna il mercoledì solo da maggio a ottobre', () => {
    expect(stato(z('roma', 'centro-notturna'), '2026-08-14', '23:30').attiva).toBe(false);
    expect(stato(z('roma', 'trastevere-notturna'), '2026-06-03', '22:00').attiva).toBe(true);
    expect(stato(z('roma', 'trastevere-notturna'), '2026-11-11', '22:00').attiva).toBe(false);
  });
  it('Firenze: notturna estiva dal primo giovedì di aprile alla prima domenica di ottobre', () => {
    const abo = z('firenze', 'settori-abo');
    const f = abo.fasce.find((x) => x.periodo);
    expect(f?.periodo && periodoDate(f.periodo, 2027)).toEqual({ da: '2027-04-01', a: '2027-10-03' });
    expect(stato(abo, '2027-04-01', '23:30').attiva).toBe(true); // giovedì 1 aprile 2027
    expect(stato(abo, '2027-03-25', '23:30').attiva).toBe(false); // giovedì prima del periodo
  });
  it('Firenze: venerdì d’estate divieto continuo dalle 7:30 alle 3:00', () => {
    const s = stato(z('firenze', 'settori-abo'), '2026-07-10', '19:00');
    expect(s.attiva).toBe(true);
    expect(s.cambio).toEqual({ data: '2026-07-11', ora: '03:00' });
  });
  it('Torino: ZTL Centrale sospesa dal 10 al 23 agosto 2026, Area Romana no', () => {
    expect(stato(z('torino', 'centrale'), '2026-08-12', '08:00').attiva).toBe(false);
    expect(stato(z('torino', 'centrale'), '2026-08-12', '08:00').motivo).toBe('sospesa');
    expect(stato(z('torino', 'centrale'), '2026-08-24', '08:00').attiva).toBe(true);
    expect(stato(z('torino', 'area-romana'), '2026-08-12', '23:00').attiva).toBe(true);
  });
  it('Milano Ascanio Sforza: chiusa senza interruzioni dal venerdì sera al lunedì mattina', () => {
    const s = stato(z('milano', 'ascanio-sforza'), '2026-11-13', '20:00');
    expect(s.attiva).toBe(true);
    expect(s.cambio).toEqual({ data: '2026-11-16', ora: '06:00' });
  });
  it('Palermo: sabato sera dalle 20 d’estate, dalle 23 d’inverno', () => {
    const p = z('palermo', 'ztl');
    expect(stato(p, '2026-07-11', '21:00').attiva).toBe(true);
    expect(stato(p, '2026-11-14', '21:00').attiva).toBe(false);
    expect(stato(p, '2026-11-14', '23:30').attiva).toBe(true);
  });
  it('Palermo: festivo non indicato = attiva e incerta', () => {
    const s = stato(z('palermo', 'ztl'), '2026-12-08', '10:00'); // martedì festivo
    expect(s.attiva).toBe(true);
    expect(s.incerta).toBe(true);
  });
  it('Pavia e Bologna zona T: sempre attive', () => {
    expect(stato(z('pavia', 'ztl'), '2026-12-25', '04:00').motivo).toBe('sempre');
    expect(stato(z('bologna', 'zona-t'), '2026-11-15', '12:00').attiva).toBe(true);
  });
  it('panorama: una riga per zona', () => {
    const n = cittaById('roma')!.zone.length;
    expect(zonaDi(cittaById('roma')!).id).toBe('centro-diurna');
    expect(panorama('2026-11-13', '10:00', 'it').totale).toBe(26);
    expect(n).toBe(8);
  });
});

describe('multa', () => {
  it('un giorno: 83 € entro 60 giorni, 58,10 € entro 5, 166 € non pagata', () => {
    const m = multa({ tipo: 'ztl', giorni: 1 });
    expect(m.entro60).toBe(83);
    expect(m.entro5).toBe(58.1);
    expect(m.dopo60).toBe(166);
  });
  it('tre giorni = tre sanzioni (art. 198 c.2-bis)', () => {
    const m = multa({ tipo: 'ztl', giorni: 3 });
    expect(m.sanzioni).toBe(3);
    expect(m.entro60).toBe(249);
  });
  it('zona a pagamento: tariffa aggiunta senza sconto', () => {
    const m = multa({ tipo: 'tariffata', giorni: 1, tariffa: 7.5 });
    expect(m.entro60).toBe(90.5);
    expect(m.entro5).toBe(65.6);
  });
  it('veicolo vietato per le emissioni', () => {
    expect(multa({ tipo: 'emissioni', giorni: 1 }).entro60).toBe(168);
  });
  it('scadenze dalla notifica e termine di notifica', () => {
    const m = multa({ tipo: 'ztl', giorni: 1, notifica: '2026-11-13', estero: true });
    expect(m.scadenze).toEqual({ sconto: '2026-11-18', pagamento: '2027-01-12', prefetto: '2027-01-12', giudice: '2027-01-12' });
    expect(limiteNotifica('2026-11-13')).toBe('2027-02-11');
    expect(limiteNotifica('2026-11-13', true)).toBe('2027-11-08');
  });
});
