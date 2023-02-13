import './styles.css';

const CharacterCard = ({ characterImage, nameCharacter, stat, species, lastKnown, origin }) => (
	<article className='characterCard'>
		<div className='characterImagen'>
			<img src={characterImage} alt={nameCharacter} />
		</div>
		<div className='characterContent'>
			<div className='section'>
				<h2>{nameCharacter}</h2>
				<span className='status'>
					<span
						className={`status__icon ${
							stat === 'Dead' ? 'status__dead' : stat === 'unknown' ? 'status__unknown' : 'status__alive'
						}`}
					></span>
					{stat} - {species}
				</span>
			</div>
			<div className='section'>
				<span className='text-gray'>Last known location:</span>
				<a href={lastKnown.url}>{lastKnown.name}</a>
			</div>
			<div className='section'>
				<span className='text-gray'>First seen in:</span>
				<a href={origin.url}>{origin.name}</a>
			</div>
		</div>
	</article>
);

export default CharacterCard;
