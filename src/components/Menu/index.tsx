import { ReactNode } from "react"
import { MenuContainer } from "./styles"

interface MenuProps{
    children: ReactNode
}

export function Menu({children}: MenuProps){
    return(
        <MenuContainer>
            {children}
        </MenuContainer>
    )
}