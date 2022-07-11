import { v1 as uuid } from 'uuid';
import data from '../../data/patients.json';
import { Patient, PatientNoSsn, NewPatient } from '../types';

const patients: Patient[] = data;

const getAllFull = (): Patient[] => {
  return patients;
};

const getAllNoSsn = (): PatientNoSsn[] => {
  return patients.map(({ ssn: _ssn, ...p}) => p);
};

const addNew = (patient: NewPatient): Patient => {
  const id: string = uuid();
  const newPatient: Patient = {
    id,
    ...patient
  };
  patients.push(newPatient);
  return newPatient;
};


export default {
  getAllFull,
  getAllNoSsn,
  addNew
};