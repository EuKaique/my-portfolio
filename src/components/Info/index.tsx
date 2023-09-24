import { AvatarContainer, InfoContainer, MessagingContainer, TitleContainer } from "./styles";
import Photo from '../../assets/images/photo.png';
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa"
import { useTheme } from "../../store/useTheme";

type LightProps = {
    themeColor: boolean
}

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
                <h2>Kaique Oliveira Santos</h2>
                <h3>Front-end Developer</h3>
            </TitleContainer>
            <MessagingContainer themeColor={themeColor}>
                <p><span>"</span>Se existe uma forma de fazer melhor,<span>"</span></p> 
                <p className="last-p-class">descubra-a.</p>
                <small>Thomas Edison</small>
            </MessagingContainer>
        </InfoContainer>
    )
}