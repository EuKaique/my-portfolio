import { Info } from "./components/Info";
import { useTheme } from "./store/useTheme";
import { HomeContainer } from "./styles";

export default function Home(){
    const themeColor = useTheme();

    return(
        <HomeContainer themeColor={themeColor.light}>
            <Info themeColor={themeColor.light}/>
        </HomeContainer>
    )
}