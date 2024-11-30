import { LightProps } from "../../@types/types";
import { Educations } from "../../mocks";
import { Card, CardContainer, EducationContainer, TitleContainer } from "./styles";

export function Education({themeColor}: LightProps){
    return(
        <EducationContainer>
            <TitleContainer themeColor={themeColor}>
                <div>
                    <div></div>
                </div>
                <div>
                    <h1>Cursos</h1>
                </div>
            </TitleContainer>
            <CardContainer>
                {Educations.map((e) => (
                    <Card themeColor={themeColor} key={e.id}>
                        <div className="flex">
                            <img src={e.image} alt={e.title} />
                            <h6>{e.title}</h6>
                        </div>
                        <h4>{e.course}</h4>
                        <span>{e.date}</span>
                    </Card>
                ))}
            </CardContainer>
        </EducationContainer>
    )
}