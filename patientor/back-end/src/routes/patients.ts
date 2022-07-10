import express from 'express';
import patientService from '../services/patientService';

const patientRouter = express.Router();

patientRouter.get('/', (_req, res) => {
  const result = patientService.getAllNoSsn();
  res.json(result);
});

export default patientRouter;
