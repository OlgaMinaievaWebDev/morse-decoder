const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  let result = '';

  let codedStr = expr;

  while (codedStr.length > 0) {
    const chunk = codedStr.substr(0, 10);
    const encodedChunk = chunk
      .replaceAll('10', '.')
      .replaceAll('11', '-')
      .replaceAll('0', '');

    if (encodedChunk === '********') {
      result += ' ';
    } else {
      result += MORSE_TABLE[encodedChunk] || ' ';
    }
    codedStr = codedStr.substr(10);
  }

  return result;
};
