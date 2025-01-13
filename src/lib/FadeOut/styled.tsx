import styled from 'styled-components'

export const Wrapper = styled.span<{ $duration: number }>`
	animation: fadeOut
		${({ $duration }) => ($duration ? $duration + 'ms' : '5000ms')} linear;
	position: fixed;

	@keyframes fadeOut {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
`
