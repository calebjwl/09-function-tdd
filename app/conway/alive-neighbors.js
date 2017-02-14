export default function (array) {
  let truthCounter = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === true) {
      truthCounter += 1;
    }
  }
  return truthCounter;
}
