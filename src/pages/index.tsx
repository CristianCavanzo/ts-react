import { CardImages } from 'components/Card/CardImages';
import { useState } from 'react';
import type { MouseEventHandler } from 'react';
type Images = { id: string; url: string };
interface State {
	images: Images[];
}
const Home = () => {
	const [state, setStates] = useState<State>({ images: [] });
	const addFox: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		const random = (): number => Math.floor(Math.random() * 124) + 1;
		const image = `https://randomfox.ca/images/${random()}.jpg`;
		const newStateImages = state.images;
		newStateImages.push({
			id: crypto.randomUUID(),
			url: image,
		});
		setStates({ ...state, images: newStateImages });
	};

	return (
		<div>
			<p className="uppercase">Hola</p>
			<button className="rounded-md bg-blue-950 text-white py-2 px-4 border-none" onClick={addFox}>
				Agregar
			</button>
			{state.images.map((image) => (
				<div key={image.id} className="p-4">
					<CardImages image={image.url} />
				</div>
			))}
		</div>
	);
};

export default Home;
