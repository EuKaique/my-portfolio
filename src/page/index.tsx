import * as S from './styles'
import { Header } from "../components/Header"
import { Left } from '../components/Resume/Left'
import { Right } from '../components/Resume/Right'

export const Page = () => {
    return (
        <S.Container>
            <Header />
            <main className="l-main bd-container">
                <S.Resume className="resume" id="area-cv">
                    <Left />
                    <Right />
                </S.Resume>
            </main>
        </S.Container>
    )
}