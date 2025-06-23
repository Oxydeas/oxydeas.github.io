const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const toggleButton = document.getElementById('toggle-mode')
const clock = document.querySelector('.clock')
const title = document.getElementById('clock-title')

let lastSecond = -1

function setClock() {
  const currentDate = new Date()
  const seconds = currentDate.getSeconds()
  const minutes = currentDate.getMinutes()
  const hours = currentDate.getHours()

  const secondsRatio = seconds / 60
  const minutesRatio = (seconds + minutes * 60) / 3600
  const hoursRatio = (minutesRatio + hours * 60) / 720

  // Bézier only when not wrapping from 59 -> 0
  if (seconds === 0 && lastSecond === 59) {
    secondHand.style.transition = 'none'
  } else {
    secondHand.style.transition = 'transform 0.3s cubic-bezier(.4, 2.08, .55, .44)'
  }

  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)

  lastSecond = seconds
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
  element.style.transform = `translateX(-50%) rotate(${rotationRatio * 360}deg)`
}

toggleButton.addEventListener('click', () => {
  const isBlack = clock.classList.toggle('black-mode')
  toggleButton.textContent = isBlack ? 'Aller' : 'Retour'
  title.textContent = isBlack ? 'Horaire retour' : 'Horaire aller'
})

setInterval(setClock, 1000)
setClock()
