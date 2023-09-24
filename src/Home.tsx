import { Aside } from "./components/Aside";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Info } from "./components/Info";
import { Menu } from "./components/Menu";
import { Socials } from "./components/Socials";
import { useTheme } from "./store/useTheme";
import { HomeContainer } from "./styles";

export default function Home(){
    const themeColor = useTheme();

    return(
        <HomeContainer themeColor={themeColor.light}>
            <Aside>
                <Info themeColor={themeColor.light}/>
                <Contact themeColor={themeColor.light}/>
                <Socials themeColor={themeColor.light}/>
            </Aside>
            <Menu>
                <Experience themeColor={themeColor.light}/>
            </Menu>
        </HomeContainer>
    )
}