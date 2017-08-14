function countVowels(str){
  if(typeof str != 'string')return new Error('Only String inputs are allowed!g');
  return str.split('').filter((letter)=>{return letter.match(/[aeiou]/gi)}).length;
}
module.exports = countVowels;
