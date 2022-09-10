import React from 'react'
import { useRef } from 'react'

function Start({ setUserName }) {
	const inputRef = useRef()

	const handleClick = () => {
		inputRef.current.value && setUserName(inputRef.current.value)
	}
	return (
		<div className="start">
			<h1 className="start__greeting">Welcome to the Millionaires</h1>
			<input className="start__input" type="text" placeholder="Enter your name" required ref={inputRef} />
			<button className="start__button" onClick={handleClick}>
				Start
			</button>
		</div>
	)
}

export default Start
