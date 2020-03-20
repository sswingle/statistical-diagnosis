console.log("Welcome!")

// approximate proportion of population with each this disease week
base_rate_flu = 0.0045
base_rate_covid = 0.00015

// chance of having each symptom if you have each disease
chance_fever_if_flu = 0.68
chance_fever_if_covid = 0.879

chance_nasal_congestion_if_flu = 0.91
chance_nasal_congestion_if_covid = 0.048

chance_sore_throat_if_flu = 0.84
chance_sore_throat_if_covid = 0.139

// symptoms of the user
has_fever = true
has_nasal_congestion = false
has_sore_throat = false

console.log("In your location right now:")
console.log(`${(100 * base_rate_flu).toFixed(3)}% of people are expected to have the flu`)
console.log(`${(100 * base_rate_covid).toFixed(3)}% of people are expected to have COVID-19`)

chance_flu = base_rate_flu
chance_covid = base_rate_covid
// normalize
total = chance_flu + chance_covid
chance_flu /= total
chance_covid /= total
console.log("\nThus if you are sick, your chances to have each disease are:")
console.log(`${(100 * chance_flu).toFixed(2)}% chance it's the flu`)
console.log(`${(100 * chance_covid).toFixed(2)}% chance it's Covid`)

// adjust based on having or not having fever
if (has_fever) {
    chance_flu *= chance_fever_if_flu
    chance_covid *= chance_fever_if_covid
} else {
    chance_flu *= (1 - chance_fever_if_flu)
    chance_covid *= (1 - chance_fever_if_covid)
}
total = chance_flu + chance_covid
chance_flu /= total
chance_covid /= total
console.log(`\nGiven that your fever status is ${has_fever}, your chances to have each disease are now:`)
console.log(`${(100 * chance_flu).toFixed(2)}% chance it's the flu`)
console.log(`${(100 * chance_covid).toFixed(2)}% chance it's Covid`)

// adjust based on having or not having fever
if (has_fever) {
    chance_flu *= chance_fever_if_flu
    chance_covid *= chance_fever_if_covid
} else {
    chance_flu *= (1 - chance_fever_if_flu)
    chance_covid *= (1 - chance_fever_if_covid)
}
total = chance_flu + chance_covid
chance_flu /= total
chance_covid /= total
console.log(`\nGiven that your fever status is ${has_fever}, your chances to have each disease are now:`)
console.log(`${(100 * chance_flu).toFixed(2)}% chance it's the flu`)
console.log(`${(100 * chance_covid).toFixed(2)}% chance it's Covid`)

// adjust based on having or not having nasal congestion
if (has_nasal_congestion) {
    chance_flu *= chance_nasal_congestion_if_flu
    chance_covid *= chance_nasal_congestion_if_covid
} else {
    chance_flu *= (1 - chance_nasal_congestion_if_flu)
    chance_covid *= (1 - chance_nasal_congestion_if_covid)
}
total = chance_flu + chance_covid
chance_flu /= total
chance_covid /= total
console.log(`\nGiven that your nasal congestion status is ${has_nasal_congestion}, your chances to have each disease are now:`)
console.log(`${(100 * chance_flu).toFixed(2)}% chance it's the flu`)
console.log(`${(100 * chance_covid).toFixed(2)}% chance it's Covid`)

// adjust based on having or not having a sore throat
if (has_sore_throat) {
    chance_flu *= chance_sore_throat_if_flu
    chance_covid *= chance_sore_throat_if_covid
} else {
    chance_flu *= (1 - chance_sore_throat_if_flu)
    chance_covid *= (1 - chance_sore_throat_if_covid)
}
total = chance_flu + chance_covid
chance_flu /= total
chance_covid /= total
console.log(`\nGiven that your sore throat status is ${has_sore_throat}, your chances to have each disease are now:`)
console.log(`${(100 * chance_flu).toFixed(2)}% chance it's the flu`)
console.log(`${(100 * chance_covid).toFixed(2)}% chance it's Covid`)