// Spaceship Initialization
let fuelLevel = 100
let oxygenLevel = 100
const crewMembers = 5
let alienEncounters = 0
let distanceTraveled = 0

// 1. Get Going:
distanceTraveled = 153

// 2. Resource Management:
let fuelIsLow = false
let fuelReductions = 0

while (fuelLevel >= 0) {
  fuelLevel -= 5
  distanceTraveled -= 10
  fuelReductions += 1
  console.log(`Fuel Reductions: ${fuelReductions}, Current fuel level: ${fuelLevel}`)
  if (distanceTraveled <= 0) {
    break
  }
  if (fuelLevel === 0) {
    fuelIsLow = true
    console.log(`Fuel is low ${fuelIsLow}`)
    break
  }
}
// 3. Oxygen Consumption:
let oxygenConsumed = oxygenLevel -= crewMembers
console.log(`New oxygen level : ${oxygenConsumed}`)
let isOxygenLow = oxygenLevel < 20
console.log(`Oxygen is low : ${isOxygenLow}`)

// 4. Alien Encounters
alienEncounters = distanceTraveled % 2 != 0
console.log(`Crew encountered aliens: ${alienEncounters}`)


// ignore this (it's useful for unit tests)
window.distanceTraveled = distanceTraveled
