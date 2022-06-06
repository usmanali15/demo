import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global';
import InputTasks from './client/InputTasks';
import ShowTasks from './client/ShowTasks';

const theme = {
	colors: {
		header: '#ebfbff',
		body: '#fff',
		footer: '#003333'
	},
	mobile: '768px'
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Container>
					<InputTasks />
					<ShowTasks />
				</Container>
				<Footer />
			</>
		</ThemeProvider>
	);
}

export default App;

// import React, { Fragment } from 'react';

// //components

// import InputTasks from './client/InputTasks';
// import ShowTasks from './client/ShowTasks';

// function App() {
// 	return (
// 		<Fragment>
// 			<div className='container'>

// 			</div>
// 		</Fragment>
// 	);
// }

// export default App;
