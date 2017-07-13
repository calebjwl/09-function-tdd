export default function (value) {
  switch (value) {
    case 'jack':
    case 'queen':
    case 'king':
      return 10;
    case 'ace':
      return 11;
    default:
      return parseInt(value);
  }
}
