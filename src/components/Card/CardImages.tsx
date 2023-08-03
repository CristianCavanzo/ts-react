import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
interface Props {
	image: string;
}

const CardImages = ({ image }: Props) => {
	const [img, setImg] = useState(
		'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
	);
	const imageRef = useRef<HTMLImageElement>(null);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setImg(image);
				}
			});
		});

		if (imageRef.current) {
			observer.observe(imageRef.current);
		}
		return () => {
			observer.disconnect();
		};
	}, [img]);

	return (
		<div className="relative w-80 h-80">
			<div className="absolute top-0 left-0 right-0 bottom-0">
				<Image
					ref={imageRef}
					src={img}
					fill
					alt="Image"
					className="object-cover rounded-md bg-gray-300"
					loading="lazy"
				/>
			</div>
		</div>
	);
};

export { CardImages };
