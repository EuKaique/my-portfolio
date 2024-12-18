import { styled } from "styled-components";
import tw from "twin.macro";

export const EducationContainer = styled.section`
    ${tw`
        pt-8
        pl-8
        flex
        flex-col
    `}
    max-width: 1280px;
    margin: 0 auto;
`

export const TitleContainer = styled.div<{themeColor: boolean}>`
    ${tw`
        flex
        items-center
        justify-center
        gap-8
        pb-8
        md:justify-start
        md:pl-1
    `}
    margin-left: -4.6%;

    @media (max-width: 1024px){
        margin-left: -6.6%;
    }
    @media (min-width: 1280px) and (max-width: 1365px){
        margin-left: -4.9%;
    }
    @media (min-width: 1440px){
        margin-left: -9.7%;
    }
    @media (min-width: 1600px){
        margin-left: -3.7%;
    }
    @media (min-width: 1920px){
        margin-left: -3%;
    }
    @media (min-width: 2560px){
        margin-left: -7.2%;
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
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: 100%;
    margin: 0 auto;

    :nth-child(1),
    :nth-child(4){
        border-radius: 1rem 0 0 1rem;
    }
    :nth-child(3),
    :nth-child(6){
        border-radius: 0 1rem 1rem 0;
    }

    @media (max-width: 768px){
        display: block;

        div{
            border-radius: 1rem !important; 
        }
    }
`

export const Card = styled.div<{themeColor: boolean}>`
    background-color: ${props => props.themeColor ? '#D8D9DA' : "#2E2E48"};
    padding: 2rem 4.2rem;

    .flex{
        display: flex;
        align-items: center;
        gap: 1rem;

        img{
            width: 5rem;
            height: 4rem;
            border-radius: 1rem !important;
        }
        h6{
            font-size: 0.85rem;
            color: ${(props) => (props.themeColor ? "#232339" : "#E2E6EE")};
        }
    }
    h4{
        font-size: 1.06rem;
        font-weight: 600;
        margin-top: 1rem;
        color: ${(props) => (props.themeColor ? "#232339" : "#E2E6EE")}; 
    }
    span{
        font-size: 0.8rem;
        font-weight: 600;
        color: #79819A;
    }
    @media (max-width: 768px){
        margin-bottom: 2rem;
    }
`