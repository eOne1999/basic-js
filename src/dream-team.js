const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let teamName = '';
  if (members === null || members === undefined) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      let currentItem = members[i].split(' ').join('');
      teamName += currentItem[0].toUpperCase();
    }
  }
  if (teamName === '') return false;

  function AbcOrder(word) {
    if (word.length === 0) return '';
    let left = '',
      right = '',
      min = word[0];
  
    for (let i = 1; i < word.length; i++) {
      word[i] < min ?
      left += word[i] :
      right += word[i];
    }
    return AbcOrder(left).concat(min, AbcOrder(right));
  }

  return AbcOrder(teamName);
}

module.exports = {
  createDreamTeam
};
