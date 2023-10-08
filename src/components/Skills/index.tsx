import { LightProps } from "../../@types/types";
import { Card, RowOne, RowThree, RowTwo, SkillsContainer, TitleContainer } from "./styles";

export function Skills({themeColor}: LightProps){
    return(
        <SkillsContainer>
            <TitleContainer themeColor={themeColor}>
                <div>
                    <div></div>
                </div>
                <div>
                    <h1>Habilidades</h1>
                </div>
            </TitleContainer>
            <RowOne>
                <Card themeColor={themeColor}>React JS</Card>
                <Card themeColor={themeColor}>
                    <ul>
                        <li>Styled components</li>
                        <li>Tailwind</li>
                        <li>Zustand</li>
                    </ul>
                </Card>
            </RowOne>
            <RowTwo themeColor={themeColor}>
                <Card themeColor={themeColor}>Typescript</Card>
                <Card themeColor={themeColor}>Next JS</Card>
            </RowTwo>
            <RowThree themeColor={themeColor}>
                <Card themeColor={themeColor}>
                    <ul className="ul-style">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                    </ul>
                </Card>
                <Card themeColor={themeColor}>
                    <ul>
                        <li>Git</li>
                        <li>Databases</li>
                        <li>Docker</li>
                    </ul>
                </Card>
            </RowThree>
        </SkillsContainer>
    )
}