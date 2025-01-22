import React, { useState } from 'react'

function Start({ setUserName }) {
	const [name, setName] = useState('')

	const handleSubmit = () => {
		if (name.trim()) {
			setUserName(name)
		}
	}

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			handleSubmit()
		}
	}

	return (
		<div className="start">
			<p className="start__greeting">Welcome to the game!</p>
			<input
				type="text"
				placeholder="Enter your name"
				className="start__input"
				value={name}
				onChange={(e) => setName(e.target.value)}
				onKeyPress={handleKeyPress}
				autoFocus
			/>
			<button 
				className="start__button"
				onClick={handleSubmit}
			>
				Start Game
			</button>
		</div>
	)
}

export default Start
