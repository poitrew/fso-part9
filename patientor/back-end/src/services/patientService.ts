import { v1 as uuid } from 'uuid';
import data from '../../data/patients.json';
import { Patient, NewPatient, PublicPatient, Entry } from '../types';

const patients: Patient[] = data;

const getAllFull = (): Patient[] => {
  return patients;
};

const getPatientById = (id: string): Patient | undefined => {
  const patient = patients.find(p => p.id === id);
  return patient;
};

const getAllNoSsn = (): PublicPatient[] => {
  return patients.map(({ ssn: _ssn, ...p}) => p);
};

const addNew = (patient: NewPatient): Patient => {
  const id: string = uuid();
  const entries: Entry[] = [];
  const newPatient: Patient = {
    id,
    entries,
    ...patient
  };
  patients.push(newPatient);
  return newPatient;
};


export default {
  getPatientById,
  getAllFull,
  getAllNoSsn,
  addNew
};