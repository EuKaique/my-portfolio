import { LightProps } from "../../@types/types";
import { ButtonContainer, Card, CardContainer, LinkContent, ProjectsContainer, TitleContainer } from "./styles";
import { Projects as ProjectArray } from '../../mocks/index'
import { LinkIcon } from "../../assets/icons/LinkIcon";
import { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'

export function Projects({themeColor}: LightProps){
    const [displayCount, setDisplayCount] = useState(2)

    return(
        <ProjectsContainer>
            <TitleContainer themeColor={themeColor}>
                <div>
                    <div></div>
                </div>
                <div>
                    <h1>Projetos pessoais</h1>
                </div>
            </TitleContainer>
            <CardContainer>
                {ProjectArray.slice(0, displayCount).map((p) => (
                <Card key={p.id} themeColor={themeColor}>
                    <img src={p.image} alt={p.title} />
                    <h3>{p.title}</h3>
                    <h5>{p.description}</h5>
                    <LinkContent themeColor={themeColor}>
                        <LinkIcon />
                        <a href={p.link} target="_blank" rel="noreferrer">{p.title}</a>
                    </LinkContent>
                </Card>
                ))}
            </CardContainer>
            <ButtonContainer themeColor={themeColor}>
                {displayCount < ProjectArray.length ?
                    <div className="flex" onClick={() => setDisplayCount(displayCount + 2)}>
                        <h4>Mostrar Mais</h4>
                        <BiSolidDownArrow />
                    </div> :
                    <div className="flex" onClick={() => setDisplayCount(displayCount - ProjectArray.length + 1)}>
                        <h4>Mostrar Menos</h4>
                        <BiSolidUpArrow />
                    </div> 
                }
            </ButtonContainer>
        </ProjectsContainer>
    )
}