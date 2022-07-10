import data from '../../data/diagnoses.json';
import { Diagnose } from '../types';

const diagnoses: Diagnose[] = data;

const getAll = (): Diagnose[] => {
  return diagnoses;
};

export default {
  getAll
};