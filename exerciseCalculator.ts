interface Result {
  periodLength: number
  trainingDay: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

const [ firstArg, secondArg, targetInput, ...days] = process.argv

const calculateExercises = (arr: number[]): Result => {
  if (arr.some(e => isNaN(e))) throw new Error('Training days have to be number values (hours)')
  if (arr.length < 1) throw new Error('Need at least one day for calculation')

  const total = arr.reduce((total, current) => total += current, 0)
  const average = total / arr.length
  const target = Number(targetInput)
  const rating = Math.floor((average / target) * 3)

  return {
    periodLength: arr.length,
    trainingDay: arr.filter(d => d !== 0).length,
    success: average > target,
    rating,
    ratingDescription: rating < 2 ? 'too bad' : rating > 2 ? 'good' : 'not too bad but could be better',  
    target,
    average,
  }
} 

try {
  console.log(calculateExercises(days.map(d => Number(d))))
} catch(err) {
  console.error('Error:', err.message)
}