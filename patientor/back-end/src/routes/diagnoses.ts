import express from 'express';
import diagnoseService from '../services/diagnoseService';

const diagnoseRouter = express.Router();

diagnoseRouter.get('/', (_req, res) => {
  const result = diagnoseService.getAll();
  res.json(result);
});

export default diagnoseRouter;