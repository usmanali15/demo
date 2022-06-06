import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';

export default function Footer() {
	return (
		<StyledFooter>
			<Container>
				<p>&copy; 2022 TaskManager. All rights reserved</p>
			</Container>
		</StyledFooter>
	);
}
