import styled from 'styled-components'

export const Wrapper = styled.span`
	background-color: red;
	font-weight: bold;
	padding: 1px;
	background-color: orange;
	animation: fadeIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
	position: fixed;
	@keyframes fadeIn {
		0% {
			left: 30px;
		}
		100% {
			/* right: 0;
			left: 0;
			top: 0;
			bottom: 0; */
		}
	}
`
