import './Dice.css';
import { useEffect, useState } from 'react';
import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';
import four from '../assets/4.png';
import five from '../assets/5.png';
import six from '../assets/6.png';
export const Dice = () => {
	const [dice1, setDice1] = useState(Math.floor(Math.random() * 6) + 1);
	const [dice2, setDice2] = useState(Math.floor(Math.random() * 6) + 1);

	const getDiceSrc = (dice) => {
		if (dice === 1) return one;
		if (dice === 2) return two;
		if (dice === 3) return three;
		if (dice === 4) return four;
		if (dice === 5) return five;
		if (dice === 6) return six;
	};
	const handleOneDice = (setDice) => {
		setDice(Math.floor(Math.random() * 6) + 1);
	};
	const handletwoDice = (e) => {
		setDice1(Math.floor(Math.random() * 6) + 1);
		setDice2(Math.floor(Math.random() * 6) + 1);
		// console.log(dice1, dice2);
	};

	useEffect(() => {
		const handleKey = (e) => {
			if (e.code === 'Space') {
				handletwoDice();
			}
		};
		window.addEventListener('keydown', handleKey);

		return () => {
			window.removeEventListener('keydown', handleKey);
		};
	}, []);

	return (
		<>
			<div className="container">
				<img
					src={getDiceSrc(dice1)}
					alt="Dice-1"
					onClick={() => {
						handleOneDice(setDice1);
					}}
				/>
				<img
					src={getDiceSrc(dice2)}
					alt="Dice-2"
					onClick={() => {
						handleOneDice(setDice2);
					}}
				/>
			</div>
		</>
	);
};
