import { runCalculation } from '../../runCalculation.js';
import { calculate } from './calculate.js';
import { targets } from './config.js'
import { measure } from './measure.js';

runCalculation(calculate(targets), measure('https://example.com')).then(result => {
  console.log(result);
});