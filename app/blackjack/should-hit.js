import cardSum from './card-sum';
import shouldSplit from './should-split';

export default function (value1, value2) {
  if (shouldSplit(value1, value2)) {
    return false;
  } else if (cardSum(value1, value2) <= 17) {
    return true;
  }

  return false;
}
