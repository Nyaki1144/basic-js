const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isRevers = true) {
    this.reverseFlag = !isRevers;
  }

  isLetter(letter) {
    if (letter.match(/[A-Z]/gm)) {
      return true;
    } else {
      return false;
    }
  }

  mod(n, m) {
    return ((n % m) + m) % m;
  }

  encrypt(plaintext, key) {
    if (plaintext === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    } else {
      plaintext = plaintext.toUpperCase();
      key = key.toUpperCase();
    }

    let str = '';
    let num = 0;

    for (let i = 0; i < plaintext.length; i++) {
      let currentLetter = plaintext[i];
      const start = 65;

      if (this.isLetter(currentLetter)) {
        let X = currentLetter.charCodeAt(0) - start;
        let Y = key[num % key.length].charCodeAt() - start;
        let upperLetter = this.mod(X + Y, 26);

        str += String.fromCharCode(upperLetter + start);

        num++;
      } else {
        str += currentLetter;
      }
    }

    if (this.reverseFlag !== true) {
      return str;
    } else {
      return str.split('').reverse().join('');
    }
  }

  decrypt(plaintext, key) {
    if (plaintext === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    } else {
      plaintext = plaintext.toUpperCase();
      key = key.toUpperCase();
    }
    
    let str = '';
    let num = 0;
    for (let i = 0; i < plaintext.length; i++) {
      let currentLetter = plaintext[i];
      const start = 65;

      if (this.isLetter(currentLetter)) {
        let Z = currentLetter.charCodeAt(0) - start;
        let Y = key[num % key.length].charCodeAt() - start;
        let upperLetter = this.mod(Z - Y, 26);

        str += String.fromCharCode(upperLetter + start);

        num++;
      } else {
        str += currentLetter;
      }
    }

    if (this.reverseFlag !== true) {
      return str;
    } else {
      return str.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
