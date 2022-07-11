"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Object.values(types_1.Gender).includes(param);
};
const parseGender = (gender) => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};
const parseName = (text) => {
    if (!text || !isString(text)) {
        throw new Error('Incorrect or missing name');
    }
    return text;
};
const parseBirth = (text) => {
    if (!text || !isString(text)) {
        throw new Error('Incorrect or missing date of birth');
    }
    return text;
};
const parseSsn = (text) => {
    if (!text || !isString(text)) {
        throw new Error('Incorrect or missing social security number');
    }
    return text;
};
const parseOccupation = (text) => {
    if (!text || !isString(text)) {
        throw new Error('Incorrect or missing occupation');
    }
    return text;
};
const toNewPatient = ({ name, dateOfBirth, ssn, gender, occupation }) => {
    const newPatient = {
        name: parseName(name),
        dateOfBirth: parseBirth(dateOfBirth),
        ssn: parseSsn(ssn),
        gender: parseGender(gender),
        occupation: parseOccupation(occupation)
    };
    return newPatient;
};
exports.default = toNewPatient;
