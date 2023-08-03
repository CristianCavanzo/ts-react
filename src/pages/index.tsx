import { CardImages } from 'components/Card/CardImages';
import { useEffect, useState } from 'react';
interface State {
	images: { id: string; url: string }[];
}
const Home = () => {
	const [state, setStates] = useState<State>({ images: [] });
	useEffect(() => {
		const random = (): number => Math.floor(Math.random() * 124);
		const image = `https://randomfox.ca/images/${random()}.jpg`;
		const newStateImages = state.images;
		newStateImages.push({
			id: crypto.randomUUID(),
			url: image,
		});
		setStates({ ...state, images: newStateImages });
	}, []);
	return (
		<div>
			<p className="uppercase">Hola</p>
			{state.images.map((image) => (
				<div key={image.id} className="p-4">
					<CardImages image={image.url} />
				</div>
			))}
		</div>
	);
};

export default Home;
