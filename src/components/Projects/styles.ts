import { styled } from "styled-components";
import tw from "twin.macro";

export const ProjectsContainer = styled.div`
    ${tw`
        pt-12
        pl-8
        flex
        flex-col
    `}
`

export const TitleContainer = styled.div<{themeColor: boolean}>`
    ${tw`
        flex
        items-center
        justify-center
        md:justify-start
        md:pl-1
        gap-8
        pb-8
    `}
    margin-left: -4.6%;

    @media (max-width: 1024px){
        margin-left: -6.6%;
    }
    @media (min-width: 1280px) and (max-width: 1365px){
        margin-left: -4.9%;
    }
    @media (min-width: 1440px){
        margin-left: -4.2%;
    }
    @media (min-width: 1600px){
        margin-left: -3.7%;
    }
    @media (min-width: 1920px){
        margin-left: -3%;
    }
    @media (min-width: 2560px){
        margin-left: -2.2%;
    }

    div:first-child{
        ${tw`bg-slate-700`};
        border-radius: 50%;
        display: flex;
        padding: 0.6rem;
        
        div{
            background-color: #CCC;
            padding: 0.4rem 0.4rem;
            border-radius: 50%;
        }
    }

    h1{
        font-size: 1.5rem;
        font-family: 'Manjari', sans-serif;
    }
    color: ${(props) => (props.themeColor ? "#232339" : "#BBBBBB")};
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 0 2rem;

    :nth-child(odd){
        border-radius: 1rem 0 0 1rem;
    }
    :nth-child(even){
        border-radius: 0 1rem 1rem 0;
    }

    @media (max-width: 768px){
        display: block;

        :nth-child(odd){
            border-radius: 1rem;
        }
        :nth-child(even){
            border-radius: 1rem;
        }
    }
`

export const Card = styled.div<{ themeColor: boolean }>`
    background-color: ${props => props.themeColor ? '#D8D9DA' : "#2E2E48"};
    padding: 2rem;

    img{
        border-radius: 1rem !important;
        width: 12rem;
        height: 8rem;
    }
    h3{
        color: ${props => props.themeColor ? '#2E2E48' : "#E2E6EE"};
        padding-top: 0.5rem;
        font-size: 1.25rem;
        font-weight: 600;
    }
    h5{
        color: ${props => props.themeColor ? '#232339' : "#ACB1C3"};
        padding-top: 0.5rem;
        padding-bottom: 1rem;
        font-size: 1.05rem;
        font-weight: 400;
    }

    @media (max-width: 768px){
        margin-bottom: 2rem;
    }
    
`

export const LinkContent = styled.div<{ themeColor: boolean}>`
    display: flex;
    align-items: center;
    gap: 1rem;

    svg{
        height: 1.8rem;
        width: 1.8rem;
        background-color: #2A337E;
        padding: 0.5rem;
        border-radius: 50% !important;
    }

    a{
        color: ${props => props.themeColor ? '#2A337E' : '#95AAFB'} ;
        font-weight: 600;
        text-decoration: underline;

        &:hover{
            text-decoration: none;
        }
    }
`
export const ButtonContainer = styled.div<{ themeColor: boolean}>`
    display: flex;
    justify-content: center;
    padding: 1rem;
    margin: 2% auto;
    width: 93%;
    background-color: ${props => props.themeColor ? '#D8D9DA' : "#2E2E48"};

    h4{
        font-weight: 600;
    }
    h4, svg{
        color: ${props => props.themeColor ? '#2E2E48' : "#EEEEEE"};
    }

    .flex{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
    }
`