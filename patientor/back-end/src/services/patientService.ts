import data from '../../data/patients.json';
import { Patient, PatientNoSsn } from '../types';

const getAllFull = (): Patient[] => {
  return data;
};

const getAllNoSsn = (): PatientNoSsn[] => {
  return data.map(({ ssn: _ssn, ...p}) => p);
};

export default {
  getAllFull,
  getAllNoSsn
};