export const runCalculation = async (calculate, measure) => {
  const value = await measure();
  const grade = calculate(value);

  return {
    value,
    grade
  }
};