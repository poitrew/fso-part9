interface Result {
  periodLength: number
  trainingDay: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

export const calculateExercises = (target: number, dailyExercises: number[]): Result => {
  if (dailyExercises.some(e => isNaN(e))) throw new Error('Training days have to be number values (hours)');
  if (dailyExercises.length < 1) throw new Error('Need at least one day for calculation');
  if (isNaN(target)) throw new Error('Target must be a number');

  const total = dailyExercises.reduce((total, current) => total += current, 0);
  const average = total / dailyExercises.length;
  const rating = Math.floor((average / target) * 3);

  return {
    periodLength: dailyExercises.length,
    trainingDay: dailyExercises.filter(d => d !== 0).length,
    success: average > target,
    rating,
    ratingDescription: rating < 2 ? 'too bad' : rating > 2 ? 'good' : 'not too bad but could be better',  
    target,
    average,
  };
}; 