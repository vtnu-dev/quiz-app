import { useState } from 'react'
import { useEffect } from 'react'

function Timer({ setStop, questionNumber }) {
	const [timer, setTimer] = useState(60)

	useEffect(() => {
		if (timer === 0) return setStop(true)
		const interval = setInterval(() => {
			setTimer(prev => prev - 1)
		}, 1000)
		return () => clearInterval(interval)
	}, [timer, setStop])

	useEffect(() => {
		setTimer(60)
	}, [questionNumber])

	return timer
}

export default Timer
