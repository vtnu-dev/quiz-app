import { useState, useEffect, memo } from 'react'
import useSound from 'use-sound'
import correct from '../sounds/correct.mp3'
import wrong from '../sounds/wrong.mp3'
import wait from '../sounds/wait.mp3'
import play from '../sounds/play.mp3'

const Answer = memo(({ answer, index, className, onClick }) => (
	<div
		className={className}
		onClick={onClick}
	>
		<span>{`${String.fromCharCode(65 + index)}: `}</span>
		{answer.text}
	</div>
))

function Trivia({ data, setStop, questionNumber, setQuestionNumber, setEarned, randomQuestions }) {
	const [question, setQuestion] = useState(null)
	const [selectedAnswer, setSelectedAnswer] = useState(null)
	const [className, setClassName] = useState('answer')
	const [correctAnswer] = useSound(correct)
	const [wrongAnswer] = useSound(wrong)
	const [letsPlay] = useSound(play)
	const [waiting, { stop }] = useSound(wait)
	const [correctAnswerShow, setCorrectAnswerShow] = useState(false)

	const delay = (duration, callback) => {
		const timeout = setTimeout(() => {
			callback()
		}, duration)
		return () => clearTimeout(timeout)
	}

	useEffect(() => {
		setQuestion(data[randomQuestions[questionNumber - 1]])
	}, [data, questionNumber, randomQuestions])

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
			
			if (!answer.correct) {
				delay(1000, () => {
					setCorrectAnswerShow(true)
				})
			}
		})

		delay(2000, () => {
			if (answer.correct) {
				stop()
				correctAnswer()
				delay(1000, () => {
					setQuestionNumber(prev => prev + 1)
					setSelectedAnswer(null)
					setCorrectAnswerShow(false)
				})
			} else {
				stop()
				wrongAnswer()
				delay(3000, () => {
					setStop(true)
					setCorrectAnswerShow(false)
				})
			}
		})
	}

	return (
		<div className="trivia">
			<div className="question">{question?.question}</div>
			<div className="answers">
				{question?.answers.map((answer, index) => (
					<Answer
						key={index}
						answer={answer}
						index={index}
						className={
							selectedAnswer === answer 
								? className 
								: (correctAnswerShow && answer.correct)
									? 'answer correct'
									: 'answer'
						}
						onClick={() => !selectedAnswer && handlerClick(answer)}
					/>
				))}
			</div>
		</div>
	)
}

export default Trivia
