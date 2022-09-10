import { useState, useEffect } from 'react'
import useSound from 'use-sound'
import correct from '../sounds/correct.mp3'
import wrong from '../sounds/wrong.mp3'
import wait from '../sounds/wait.mp3'
import play from '../sounds/play.mp3'

function Trivia({ data, setStop, questionNumber, setQuestionNumber, newRandomArr }) {
	const answerOptions = ['A: ', 'B: ', 'C: ', 'D: ']
	const [question, setQuestion] = useState(null)
	const [selectedAnswer, setSelectedAnswer] = useState(null)
	const [className, setClassName] = useState('answer')
	const [correctAnswer] = useSound(correct)
	const [wrongAnswer] = useSound(wrong)
	const [letsPlay] = useSound(play)
	const [waiting, { stop }] = useSound(wait)

	const delay = (duration, callback) => {
		const timeout = setTimeout(() => {
			callback()
		}, duration)
		return () => clearTimeout(timeout)
	}

	useEffect(() => {
		setQuestion(data[newRandomArr[questionNumber - 1]])
	}, [data, questionNumber, newRandomArr])

	useEffect(() => {
		delay(1000, () => waiting())
	}, [waiting, question])

	useEffect(() => {
		letsPlay()
	}, [letsPlay])

	const handlerClick = answer => {
		setSelectedAnswer(answer)
		setClassName('answer active')
		delay(500, () => {
			setClassName(answer.correct ? 'answer correct' : 'answer wrong')
		})

		delay(2000, () => {
			if (answer.correct) {
				stop()
				correctAnswer()
				delay(1000, () => {
					setQuestionNumber(prev => prev + 1)
					setSelectedAnswer(null)
				})
			} else {
				stop()
				wrongAnswer()
				delay(3000, () => {
					setStop(true)
				})
			}
		})
	}

	return (
		<div className="trivia">
			<div className="question">{question?.question}</div>
			<div className="answers">
				{question?.answers.map((answer, index) => (
					<div
						key={index}
						className={selectedAnswer === answer ? className : 'answer'}
						onClick={() => handlerClick(answer)}>
						<span>{answerOptions[index]}</span>
						{answer.text}
					</div>
				))}
			</div>
		</div>
	)
}

export default Trivia
