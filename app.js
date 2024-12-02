function guessNumber() {
	return Math.floor(Math.random() * 100) + 1
}

function guessTheNumber(secretNumber) {
	let low = 1
	let high = 100
	let attempt = 0

	while (true) {
		attempt++
		let guess = Math.floor((low + high) / 2)
		console.log(
			`Попытка ${attempt}: Проверка числа ${guess}, Диапазон: ${low}-${high}`
		)

		if (guess < secretNumber) {
			console.log('Больше')
			low = guess + 1
		} else if (guess > secretNumber) {
			console.log('Меньше')
			high = guess - 1
		} else {
			console.log(`Поздравляем! Число угадано за ${attempt} попыток.`)
			break
		}
	}
}

// Start the game
function play() {
	const secretNumber = guessNumber()

	guessTheNumber(secretNumber)
}

play()
