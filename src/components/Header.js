import { StyledHeader } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';

export default function Header() {
	return (
		<StyledHeader>
			<Container>
				<Flex>
					<div>
						<h1>TaskManager</h1>

						<p>A simple app that helps you manage your tasks</p>
					</div>
				</Flex>
			</Container>
		</StyledHeader>
	);
}
