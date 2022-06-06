import styled from 'styled-components';

export const Container = styled.div`
	width: 1000px;
	max-width: 100%;
	padding: 0 20px;
	margin: 0 auto;

	input {
		box-sizing: border-box;
		display: block;
		width: 100%;
		margin: 10px 0;
		padding: 10px;
	}
	.type-1 {
		border-radius: 10px;
		border: 1px solid #eee;
		transition: 0.3s border-color;
	}
	.type-1:hover {
		border: 1px solid #aaa;
	}
`;
