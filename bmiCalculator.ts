export const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / (height / 100) ** 2;
  if (isNaN(height) || isNaN(weight)) throw new Error('Height and weight must be a number');
  if (height === 0) throw new Error('Height could not be 0!');
  if (bmi < 18.5) return 'Underweight (Unhealthy)';
  if (bmi < 23) return 'Normal range (Healthy)';
  if (bmi < 25) return 'Overweight I (At risk)';
  if (bmi < 30) return 'Overweight II (Moderately obese)';
  return 'Overweight III (Severely obese)	';
};