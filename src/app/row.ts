export interface Row {
  date: string;
  time: string;
  source: string;
  phase: string;
  voltage: string;
  amperage: string;
  power: string;
  repower: string;
  angle: string;
  id: string;
}

export interface CheckedRow {
  [key: string]: boolean;
}
