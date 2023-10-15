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
import { HomeContainer, ScrollTop } from "./styles";
import { PiArrowFatUpBold } from 'react-icons/pi'
import { useEffect, useState } from "react";

export default function Home(){
    const themeColor = useTheme();

    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
          window.removeEventListener('scroll', handleScroll)
        };
      }, [])

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
                {isVisible && (
                    <ScrollTop themeColor={themeColor.light} onClick={scrollToTop}>
                        <PiArrowFatUpBold />
                    </ScrollTop>
                )}
            </HomeContainer>
    )
}