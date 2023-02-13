import { useEffect, useState } from 'react';
import CharacterCard from './components/CharacterCard';
import axios from 'axios';
import './App.css';
// import { rickAndMortyAPI } from './components/services/characterCard.service';

function App() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const URL = 'https://rickandmortyapi.com/api/character';
		axios.get(URL).then((res) => setCharacters(res.data.results));
	}, []);

	// useEffect(() => {
	// 	rickAndMortyAPI().then((res) => setCharacters(res));
	// }, []);

	return (
		<div className='app'>
			<h1>Rick and Morty Characters</h1>

			<div className='container'>
				{characters.map((character) => {
					const { id, name, image, species, status, origin, location } = character;
					return (
						<CharacterCard
							key={id}
							characterImage={image}
							nameCharacter={name}
							species={species}
							stat={status}
							origin={origin}
							lastKnown={location}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
