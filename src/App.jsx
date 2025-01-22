import { useState, useEffect } from 'react'
import newRandomArr from './data/newRandomArr'
import moneyPiramid from './data/moneyPiramid'
import data from './data/data'
//import Timer from './components/Timer'
import './App.scss'

// Импортируем компоненты обычным способом, уберем lazy loading пока не исправим проблему
import Trivia from './components/Trivia'
import Start from './components/Start'

// const TriviaComponent = lazy(() => import('./components/Trivia'))
// const StartComponent = lazy(() => import('./components/Start'))

// Простой компонент загрузки, если LoadingSpinner не существует
const LoadingSpinner = () => (
	<div style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
		Loading...
	</div>
)

function App() {
	const [questionNumber, setQuestionNumber] = useState(1)
	const [userName, setUserName] = useState('')
	const [stop, setStop] = useState(false)
	const [earned, setEarned] = useState('0 zł')
	// Изменяем название пропа для ясности
	const [randomQuestions, setRandomQuestions] = useState(() => newRandomArr())

	// Обновляем функцию перезапуска игры
	const handleRestartGame = () => {
		setQuestionNumber(1)
		setStop(false)
		setEarned('0 zł')
		setRandomQuestions(newRandomArr()) // Генерируем новый массив случайных вопросов
	}

	const getGuaranteedAmount = (currentQuestion) => {
		const currentAmount = moneyPiramid.find(m => m.id === currentQuestion)?.amount
		let guaranteedAmount = '0 zł'

		// Проходим по пирамиде в обратном порядке до текущего вопроса
		for (let i = 0; i < moneyPiramid.length; i++) {
			const item = moneyPiramid[i]
			// Если текущая сумма меньше или равна достигнутой и является несгораемой
			if (item.guaranteed && 
				parseInt(currentAmount?.replace(/\D/g, '')) >= parseInt(item.amount.replace(/\D/g, ''))) {
				return item.amount
			}
		}
		return guaranteedAmount
	}

	useEffect(() => {
		if (questionNumber > 1) {
			const currentAmount = moneyPiramid.find(m => m.id === questionNumber - 1).amount
			const guaranteedAmount = getGuaranteedAmount(questionNumber - 1)
			setEarned(stop ? guaranteedAmount : currentAmount)
		}
	}, [questionNumber, stop])

	return (
		<div className="App">
			{userName ? (
				<>
					<div className="main">
						{earned === '1 000 000 zł' ? (
							<div className="end-game">
								<p className="end-game__name">{userName}</p>
								<p className="end-game__status">won:</p>
								<p className="end-game__amount">{earned}!!!</p>
								<button 
									className="restart-button end-game__button"
									onClick={handleRestartGame}
								>
									Start new game
								</button>
							</div>
						) : (
							<>
								{stop ? (
									<div className="end-game">
										<p className="end-game__name">{userName}</p>
										<p className="end-game__status">earned:</p>
										<p className="end-game__amount">{earned}</p>
										<button 
											className="restart-button end-game__button"
											onClick={handleRestartGame}
										>
											Start new game
										</button>
									</div>
								) : (
									<>
										<div className="top">
											{/*<div className="timer">
											<Timer setStop={setStop} questionNumber={questionNumber} />
										</div>*/}
										</div>
										<div className="bottom">
											<Trivia
												data={data}
												setStop={setStop}
												questionNumber={questionNumber}
												setQuestionNumber={setQuestionNumber}
												setEarned={setEarned}
												randomQuestions={randomQuestions}
											/>
										</div>
									</>
								)}
							</>
						)}
					</div>
					<div className="moneyPiramid">
						<ul className="moneyPiramid__list">
							{moneyPiramid.map(moneyItem => {
								return (
									<li
										className={`moneyPiramid__item ${
											questionNumber === moneyItem.id ? 'active' : ''
										} ${moneyItem.guaranteed ? 'guaranteed' : ''}`}
										key={moneyItem.id}>
										<span className="moneyPiramid__number">{moneyItem.id}</span>
										<span className="moneyPiramid__amount">{moneyItem.amount}</span>
									</li>
								)
							})}
						</ul>
					</div>
				</>
			) : (
				<Start setUserName={setUserName} />
			)}
		</div>
	)
}

export default App
