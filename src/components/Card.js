import { StyledCard } from './styles/Card.styled';

export default function Card({ item: { description } }) {
	return (
		<StyledCard>
			<div>
				<h2>{description}</h2>
				<p>{description}</p>
			</div>
		</StyledCard>
	);
}
// layout={id % 2 === 0 && 'row-reverse'}
