const Card = ({ headline, content }: { headline: string; content: string | JSX.Element }) => {
	return (
		<div className="px-5 py-3 rounded-3xl bg-space-cadet-500 gap-2 fc justify-between items-start">
			<p className="font-playfair text-2xl text-gray-300">{headline}</p>
			<h2 className="font-lato text-3xl">{content}</h2>
		</div>
	);
};

export default Card;
