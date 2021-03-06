export type NewPatient = Omit<Patient, 'id' | 'entries'>;
export type PublicPatient = Omit<Patient, 'ssn' | 'entries' >;

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export interface Diagnose {
  code: string;
  name: string;
  latin?: string; 
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries: Entry[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}