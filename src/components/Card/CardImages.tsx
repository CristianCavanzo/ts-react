import Image, { ImageProps } from 'next/image';
import { useEffect, useRef, useState } from 'react';

type ImageTypes = Omit<ImageProps, 'src'>;
interface PropsComponent {
	src: string;
	// eslint-disable-next-line no-unused-vars
	onLazyLoad?: (imgNode: HTMLImageElement) => void;
}
type Props = PropsComponent & ImageTypes;

const CardImages = ({ src, alt, onLazyLoad, ...otherProps }: Props) => {
	const [img, setImg] = useState(
		'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
	);
	const imageRef = useRef<HTMLImageElement>(null);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setImg(src);
					if (typeof onLazyLoad === 'function' && imageRef.current) {
						onLazyLoad(imageRef.current);
					}
				}
			});
		});

		if (imageRef.current) {
			observer.observe(imageRef.current);
		}
		return () => {
			observer.disconnect();
		};
	}, [src, img, onLazyLoad]);

	return (
		<div className="relative w-80 h-80">
			<div className="absolute top-0 left-0 right-0 bottom-0">
				<Image alt={alt} ref={imageRef} src={img} fill loading="lazy" {...otherProps} />
			</div>
		</div>
	);
};

export { CardImages };
