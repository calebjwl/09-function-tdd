export default function (cardValue) {
  const convertedValue = parseInt(cardValue);
  if (convertedValue) {
    return convertedValue;
  }
  switch (cardValue) {
    case 'jack':
    case 'queen':
    case 'king':
      return 10;
    case 'ace':
      return 11;
  }
}
