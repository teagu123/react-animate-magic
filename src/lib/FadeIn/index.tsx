import * as S from './styled'

/**
 *
 * @children FadeIn animation을 사용하고 싶은 자식
 * @duration duration
 *
 */

interface PropsType {
	duration?: number
	children?: React.ReactNode
}

function FadeIn({ duration = 5000, children }: PropsType) {
	return <S.Wrapper $duration={duration}>{children}</S.Wrapper>
}

export default FadeIn
