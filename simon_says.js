const echo = (word) => word;

const shout = (word) => word.toUpperCase();

const repeat = (word, num) => word.concat(' ').repeat(num).substring(0,((word.length + 1)*num-1));

const startOfWord = (word, num) => word.substring(0, num);

const firstWord = (words) => words.split(' ')[0];

module.exports = {echo: echo, shout: shout, repeat: repeat, startOfWord: startOfWord, firstWord: firstWord};
