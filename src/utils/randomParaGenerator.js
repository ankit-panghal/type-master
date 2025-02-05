
const arr = ('Green vines attached to the trunk of the tree had wound themselves toward the top of the canopy. Ants used the vine as their private highway, avoiding all the creases and crags of the bark, to freely move at top speed from top to bottom or bottom to top depending on their current chore. At least this was the way it was supposed to be. Something had damaged the vine overnight halfway up the tree leaving a gap in the once pristine ant highway.').replaceAll('.','').split(' ').map(item => item[0].toLocaleLowerCase()+item.slice(1))

function shuffledArray(arr){
  for(let i = arr.length-1; i > 0; i--){
     let j = Math.floor(Math.random()*(i+1));
     [arr[i],arr[j]] = [arr[j],arr[i]]
  }
  return arr.join(' ')
}
const para = shuffledArray(arr)
export default para