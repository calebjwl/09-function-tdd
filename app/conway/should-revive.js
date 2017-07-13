import aliveNeighbors from './alive-neighbors';

export default function (array) {
  if (aliveNeighbors(array) === 3) {
    return true;
  }

  return false;
}
