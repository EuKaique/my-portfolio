import { Aside } from "./components/Aside";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Info } from "./components/Info";
import { Menu } from "./components/Menu";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
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
                <Projects themeColor={themeColor.light}/>
                <Education themeColor={themeColor.light}/>
                <Skills themeColor={themeColor.light}/>
            </Menu>
        </HomeContainer>
    )
}