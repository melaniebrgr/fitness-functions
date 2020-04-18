export const calculate = targets => value => {
  for (const key in targets) {
    if (value >= targets[key][0] && value <= targets[key][1]) {
      return key
    }
  }
}



