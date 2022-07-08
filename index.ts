import express from 'express'
import { calculateBmi } from './bmiCalculator';

const app = express()

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!')
})

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query
  try {
    const bmi = calculateBmi(Number(height), Number(weight))
    res.json({
      height,
      weight,
      bmi
    })
  } catch (error) {
    res.status(401).json({ error: 'malformatted parameters '})
  }
})

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})