import { useState, useEffect } from 'react'
import newRandomArr from './data/newRandomArr'
import Trivia from './components/Trivia'
import moneyPiramid from './data/moneyPiramid'
import data from './data/data'
//import Timer from './components/Timer'
import './App.scss'
import Start from './components/Start'

function App() {
	const [questionNumber, setQuestionNumber] = useState(1)
	const [userName, setUserName] = useState('')
	const [stop, setStop] = useState(false)
	const [earned, setEarned] = useState('0 zł')

	useEffect(() => {
		questionNumber > 1 && setEarned(moneyPiramid.find(moneyItem => moneyItem.id === questionNumber - 1).amount)
	}, [questionNumber])

	return (
		<div className="App">
			{userName ? (
				<>
					<div className="main">
						{earned === '1 000 000 zł' ? (
							<div className="end-game">
								<p style={{ fontWeight: 'bold' }}>Congratulations!!!</p>
								<p className="user-name">{userName} </p>
								<p style={{ color: 'white' }}>won:</p>
								<p>{earned}!!!</p>
							</div>
						) : (
							<>
								{stop ? (
									<div className="end-game">
										<p className="user-name">{userName} </p>
										<p style={{ color: 'white' }}>earned: </p>
										{earned}
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
												newRandomArr={newRandomArr}
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
										className={questionNumber === moneyItem.id ? 'moneyPiramid__item active' : 'moneyPiramid__item'}
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
