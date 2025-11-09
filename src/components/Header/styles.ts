import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--body-color);
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
`;
export const Nav = styled.nav`
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const NavMenu = styled.div`
    @media screen and (max-width: 968px){
        position: fixed;
        bottom: -100%;
        left: 0;
        width: 100%;
        padding: 2rem 1.5rem;
        background-color: var(--body-color);
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
        z-index: var(--z-fixed);
        transition: 0.3s;
    }
`
export const NavLogo = styled.a`
    color: var(--title-color);
    font-weight: var(--font-medium);
`
export const NavToggle = styled.div`
    color: var(--title-color);
    font-weight: var(--font-medium);
    font-size: 1.2rem;

    cursor: pointer;
`
export const NavList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media screen and (max-width: 320px){
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem .5rem;
    }
`
export const NavItem = styled.li`
    text-align: center;

    .active-link{
        color: var(--title-color);
    }
`
export const NavLink = styled.a`
    display: flex;
    flex-direction: column;
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
    font-weight: var(--font-medium);

    &:hover{
        color: var(--title-color);
    }
`
export const NavIcon = styled.i`
    font-size: 1.2rem;
    margin-bottom: var(--mb-1);
`