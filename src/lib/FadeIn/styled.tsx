import styled from 'styled-components'

export const Wrapper = styled.span<{ $duration: number }>`
	animation: fadeIn
		${({ $duration }) => ($duration ? $duration + 'ms' : '5000ms')} linear;
	position: fixed;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`
