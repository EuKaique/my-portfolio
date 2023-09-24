import { ReactNode } from "react"
import { AsideContainer } from "./styles"

interface AsideProps{
    children: ReactNode
}

export function Aside({children}: AsideProps){
    return(
        <AsideContainer>
            {children}
        </AsideContainer>
    )
}