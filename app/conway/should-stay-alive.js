import aliveNeighbors from './alive-neighbors';

export default function (array) {
  if (1 < aliveNeighbors(array) && aliveNeighbors(array) < 4) {
    return true;
  }

  return false;
}
