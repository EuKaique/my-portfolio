import { LightProps } from "../../@types/types";
import {
  IconContainer,
  ListItem,
  ListItems,
  SocialsContainer,
  Title,
} from "./styles";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import { Urls } from "../../mocks";

export function Socials({ themeColor }: LightProps) {
  const instagram = Urls[1].instagram;
  const facebook = Urls[2].facebook;
  const linkedin = Urls[3].linkedin;

  const handleAccessSocial = (url: string | undefined) => {
    window.open(url, "_blank");
  };

  return (
    <SocialsContainer>
      <Title>Redes sociais</Title>
      <ListItems>
        <ListItem themeColor={themeColor}>
          <IconContainer className="bg-instagram">
            <a href={instagram} target="_blank" rel="noreferrer">
              <BsInstagram size={22} />
            </a>
          </IconContainer>
          <div>
            <p>Instagram</p>
            <h3 onClick={() => handleAccessSocial(instagram)}>@kaique_o_s</h3>
          </div>
        </ListItem>
        <ListItem themeColor={themeColor}>
          <IconContainer className="bg-facebook">
            <a href={facebook} target="_blank" rel="noreferrer">
              <BsFacebook size={22} />
            </a>
          </IconContainer>
          <div>
            <p>Facebook</p>
            <h3 onClick={() => handleAccessSocial(facebook)}>
              kaique.oliveirasantos.547
            </h3>
          </div>
        </ListItem>
        <ListItem themeColor={themeColor}>
          <IconContainer className="bg-linkedin">
            <a href={linkedin} target="_blank" rel="noreferrer">
              <BsLinkedin size={22} />
            </a>
          </IconContainer>
          <div>
            <p>Linkedin</p>
            <h3 onClick={() => handleAccessSocial(linkedin)}>
              kaique-oliveira-santos-0806a6a3/
            </h3>
          </div>
        </ListItem>
      </ListItems>
    </SocialsContainer>
  );
}
