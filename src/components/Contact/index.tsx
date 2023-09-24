import { ContactContainer, IconContainer, ListItem, ListItems, Title } from "./styles";
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { LightProps } from "../../@types/types";
import { Urls } from "../../utils";

export function Contact({themeColor}: LightProps){
    const github = Urls[0].github
    return(
        <ContactContainer>
            <Title>Contato</Title>
            <ListItems>
                <ListItem themeColor={themeColor}>
                    <IconContainer>
                        <HiOutlineMail size={22}/>
                    </IconContainer>
                    <div>
                        <p>E-mail</p>
                        <h3>kaiqueols75@gmail.com</h3>
                    </div>
                </ListItem>
                <ListItem themeColor={themeColor}>
                    <IconContainer>
                        <a href={github} target="_blank" rel="noreferrer">
                            <FaGithub size={22}/>
                        </a>
                    </IconContainer>
                    <div>
                        <p>Github</p>
                        <h3>EuKaique</h3>
                    </div>
                </ListItem>
                <ListItem themeColor={themeColor}>
                    <IconContainer>
                        <HiOutlinePhone size={22}/>
                    </IconContainer>
                    <div>
                        <p>Celular</p>
                        <h3>(11) 95242-2368</h3>
                    </div>
                </ListItem>
                <ListItem themeColor={themeColor}>
                    <IconContainer>
                        <MdLocationOn size={22}/>
                    </IconContainer>
                    <div>
                        <p>Endereço</p>
                        <h3>São Paulo, SP</h3>
                    </div>
                </ListItem>
            </ListItems>
        </ContactContainer>
    )
}