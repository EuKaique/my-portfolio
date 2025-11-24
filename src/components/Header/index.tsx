import * as S from "./styles";

export const Header = () => {
    return (
    <S.Container className="l-header">
        <S.Nav className="bd-container">
            <S.NavLogo href="#">Kaique</S.NavLogo>
            <S.NavMenu id="nav-menu">
                <S.NavList>
                    <S.NavItem>
                        <S.NavLink href="#inicio" className="active-link">
                            <S.NavIcon className="bx bx-home"></S.NavIcon>Início
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink href="#perfil">
                            <S.NavIcon className="bx bx-user"></S.NavIcon>Perfil
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink href="#educacao">
                            <S.NavIcon className="bx bx-book"></S.NavIcon>Educação
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink href="#habilidades">
                            <S.NavIcon className="bx bx-receipt"></S.NavIcon>Habilidades
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink href="#experiencia">
                            <S.NavIcon className="bx bx-briefcase-alt"></S.NavIcon>Experiência
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink href="#cursos">
                            <S.NavIcon className="bx bx-award"></S.NavIcon>Cursos
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink href="#referencias">
                            <S.NavIcon className="bx bx-external"></S.NavIcon>Referências
                        </S.NavLink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLink href="#hobbies">
                            <S.NavIcon className='bx bxs-invader'></S.NavIcon>Hobbies
                        </S.NavLink>
                    </S.NavItem>
                </S.NavList>
            </S.NavMenu>
            <S.NavToggle id="nav-toggle">
                <S.NavIcon className="bx bx-grid-alt"></S.NavIcon>
            </S.NavToggle>
        </S.Nav>
    </S.Container>
    )
}