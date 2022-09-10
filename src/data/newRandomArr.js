import data from './data'
import moneyPiramid from './moneyPiramid'

let newRandomArr = []

const MIN = 0
const MAX = data.length - 1

const myNumbers = []

const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const addRandomNumberToArray = (arr, min, max) => {
	let newRandomNumber
	const updateMyNumbers = [...arr]

	while (updateMyNumbers.length !== moneyPiramid.length) {
		newRandomNumber = randomNumber(min, max)

		if (!updateMyNumbers.includes(newRandomNumber)) {
			updateMyNumbers.push(newRandomNumber)
		}
	}
	return updateMyNumbers
}
newRandomArr = addRandomNumberToArray(myNumbers, MIN, MAX)

export default newRandomArr
