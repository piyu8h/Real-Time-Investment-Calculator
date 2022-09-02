
const startingAmount = document.getElementById('startingCash')
const duration = document.getElementById('duration')
const recurring = document.getElementById('recurring')
const expectedReturn = document.getElementById('return')
const submitBtn = document.getElementById('submit')
const form = document.getElementById('form')
const output = document.getElementById('output')

const format = num => num.toLocaleString()

const runCalculations = () => {
  let startingCash = parseInt(startingAmount.value)
  let loopRuns = parseInt(duration.value) * 12
  let percentage = parseFloat(expectedReturn.value)
  let percentageMultiplier = (percentage / 100) + 1
  let monthlyContributions = parseInt(recurring.value)
  let totalMonthlyContributions = monthlyContributions * loopRuns
  let cash = startingCash
  
  for (let i = 1; i <= loopRuns; i++) {
    if (i % 12 == 0) {
      cash = cash * percentageMultiplier
    }
    cash += monthlyContributions
  }
    
  output.innerHTML = `<p>Starting with <b>₨${format(startingCash)}.00</b>,<br><br>
  </p>`
  output.innerHTML += `<p>and contributing an additional <b>₨${monthlyContributions} per month</b>,<br><br>
  </p>`
  output.innerHTML += `<p>with an expected return of <b>${percentage}%</b>,<br><br>
  </p>`
  output.innerHTML += `<p>you would have invested ₨${format(startingCash + totalMonthlyContributions)},<br><br>
  </p>`
  output.innerHTML += `<p>with a <b>return of ₨${format(cash)}</b> after ${loopRuns / 12} years,<br><br>
  </p>`
  output.innerHTML += `<p>for a <b>net profit of ₨${format(cash - startingCash - totalMonthlyContributions)}</b>.<br><br>
  </p>`
}

// form.addEventListener('submit', runCalculations)
[startingAmount, duration, recurring, expectedReturn].forEach(input => {
  input.addEventListener('change', runCalculations)
})

runCalculations()