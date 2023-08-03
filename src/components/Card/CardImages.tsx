import Image from 'next/image';
interface Props {
	image: string;
}

const CardImages = ({ image }: Props) => {
	return (
		<div className="relative w-80 h-80">
			<div className="absolute top-0 left-0 right-0 bottom-0">
				<Image src={image} fill alt="Image" className="object-cover rounded-md" loading="lazy" />
			</div>
		</div>
	);
};

export { CardImages };
