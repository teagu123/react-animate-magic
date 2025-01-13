import * as S from './styled'

/**
 *
 * @children Slide animation을 사용하고 싶은 자식
 * @duration duration
 * @딜레이 딜레이
 */

interface PropsType {
	children?: React.ReactNode
}

function SlideMotion({ children }: PropsType) {
	return <S.Wrapper>{children}</S.Wrapper>
}

export default SlideMotion
