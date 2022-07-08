import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;
  try {
    const bmi = calculateBmi(Number(height), Number(weight));
    res.json({
      height,
      weight,
      bmi
    });
  } catch (error) {
    res.status(401).json({ error: 'malformatted parameters '});
  }
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  if (!(daily_exercises && target)) {
    res.status(401).json({ error: 'parameters missing' });
    return;
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = calculateExercises(target, daily_exercises);
    res.json(result);
  } catch (error) {
    res.status(401).json({ error: 'malformatted parameters' });
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});