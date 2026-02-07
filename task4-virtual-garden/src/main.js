// complete the challenge here 👇
let garden = ["Tomato", "Carrot", "Lettuce", "Cucumber", "Pepper"];
console.log(`Initial garden ${garden}`);

garden.push('Pumpkin');
garden.unshift('Sunflower')
console.log(`Updated garden: ${garden}`);
console.log(`Number of plants: ${garden.length}`);

const harvestFirst = garden.shift();
const harvestSecond = garden.pop()
console.log(`Harvested: ${harvestFirst} and ${harvestSecond}`);
  
const replaced = garden[3] = 'Bell Pepper';
console.log(`Replaced plant at index ${garden.indexOf('Bell Pepper')}`)
console.log(`Garden after replacement: ${garden}`);

const searchWeed = garden.includes('Weeds');
console.log(`Garden includes weeds: ${searchWeed}`);

