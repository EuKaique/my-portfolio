import { LightProps } from "../../@types/types";
import { Experiences } from "../../mocks";
import { CompanyContainer, Content, Description, Details, ExperienceContainer, ExperienceContent, InfoContainer, LineVertical, LogoContainer, PeriodContainer, TitleContainer } from "./styles";

export function Experience({themeColor}: LightProps){
    const screen = window.innerWidth
    
    return(
        <ExperienceContainer>
            <TitleContainer themeColor={themeColor}>
                <div>
                    <div></div>
                </div>
                <div>
                    <h1>Experiência de trabalho</h1>
                </div>
            </TitleContainer>
            <ExperienceContent>
                {
                    Experiences.map((e, index) => (
                        <Content key={index}>
                            <LineVertical />
                            <Details>
                                <PeriodContainer themeColor={themeColor}>
                                    <div>
                                        <div></div>
                                    </div>
                                    <div>
                                        <p>{e.period}</p>
                                    </div>
                                </PeriodContainer>
                                <CompanyContainer themeColor={themeColor}>
                                    <LogoContainer>
                                        <img src={e.logo} alt={e.company} />
                                    </LogoContainer>
                                    <InfoContainer>
                                        <h5>{e.occupation}</h5>
                                        <h3>{e.company}</h3>
                                    </InfoContainer>
                                </CompanyContainer>
                            </Details>
                            {screen >= 768 && (
                                <Description themeColor={themeColor}>{e.description}</Description>
                            )}
                        </Content>
                    ))
                }
            </ExperienceContent>
        </ExperienceContainer>
    )
}