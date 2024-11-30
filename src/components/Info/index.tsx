import { AvatarContainer, InfoContainer, MessagingContainer, TitleContainer } from "./styles";

import Photo from '../../assets/images/photo.png';
import Curriculo from '../../assets/pdf/curriculo-kaique.pdf'

import { FaLightbulb, FaRegLightbulb } from "react-icons/fa"

import { useTheme } from "../../store/useTheme";
import { LightProps } from "../../@types/types";

export function Info({themeColor}: LightProps){
    const light = useTheme()
    return(
        <InfoContainer>
            <AvatarContainer>
                <div>
                    <img src={Photo} alt="Kaique" />
                </div>
                <button onClick={() => light.setLight(!light.light)}>
                    {themeColor ? <FaRegLightbulb size={22} fill="#232339"/> : <FaLightbulb size={22}/>}
                </button>
            </AvatarContainer>
            <TitleContainer themeColor={themeColor}>
                <h2>Kaique</h2>
                <h3>Desenvolvedor Front-end</h3>
                <a className="btn-curriculo" href={Curriculo} target="_blank" rel="noreferrer">Currículo PDF</a>
            </TitleContainer>
            <MessagingContainer themeColor={themeColor} />
        </InfoContainer>
    )
}