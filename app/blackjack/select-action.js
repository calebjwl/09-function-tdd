import shouldSplit from './should-split';
import shouldHit from './should-hit';

export default function (value1, value2) {
  if (shouldHit(value1, value2)) {
    return 'hit';
  }
  if (shouldSplit(value1, value2)) {
    return 'split';
  }

  return 'stay';
}
