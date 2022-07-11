import { Gender, NewPatient } from "./types";

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
      throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

const parseName = (text: unknown): string => {
  if (!text || !isString(text)) {
    throw new Error('Incorrect or missing name');
  }
  return text;
};

const parseBirth = (text: unknown): string => {
  if (!text || !isString(text)) {
    throw new Error('Incorrect or missing date of birth');
  }
  return text;
};

const parseSsn = (text: unknown): string => {
  if (!text || !isString(text)) {
    throw new Error('Incorrect or missing social security number');
  }
  return text;
};

const parseOccupation = (text: unknown): string => {
  if (!text || !isString(text)) {
    throw new Error('Incorrect or missing occupation');
  }
  return text;
};

type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown };

const toNewPatient = ({ name, dateOfBirth, ssn, gender, occupation }: Fields): NewPatient => {
  const newPatient: NewPatient = {
    name: parseName(name),
    dateOfBirth: parseBirth(dateOfBirth),
    ssn: parseSsn(ssn),
    gender: parseGender(gender),
    occupation: parseOccupation(occupation)
  };
  return newPatient;
};

export default toNewPatient;