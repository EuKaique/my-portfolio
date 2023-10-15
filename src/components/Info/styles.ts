import { styled } from "styled-components";
import tw from "twin.macro";

export const InfoContainer = styled.div`
    ${tw`
        pt-8
        px-4
    `}
`
export const AvatarContainer = styled.div`
    ${tw`
        flex
        justify-between
        items-center
        md:gap-16
        gap-2
    `}
    img{
        border-radius: 50%;
        width: 9rem;
        height: 8.5rem;
        filter: grayscale(80%);
    }
    @media (min-width: 360px) and (max-width: 576px){
        padding-left: 34%;

        button{
            margin-right: 37%;
        }
    }
    @media (min-width: 576px) and (max-width: 820px){
        padding-left: 40%;

        button{
            margin-right: 37%;
        }
    }
`

export const TitleContainer = styled.div<{themeColor: boolean}>`
    ${tw`
        flex
        flex-col
        mt-2
        mb-4
        leading-9
    `}
    font-family: 'Poppins', sans-serif;
    h2{
        color: ${(props) => (props.themeColor ? "#232339" : "#FFFFFF")};
        font-size: 1.3rem;
        font-weight: 500;
    }
    h3{
        background: linear-gradient(to right, #A478E8, #E2E6EE);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-size: 1rem;
        font-weight: 600;
    }
    @media (max-width: 768px){
        text-align: center;
    }
`

export const MessagingContainer = styled.div<{themeColor: boolean}>`
    ${tw`
        flex
        flex-col
        mb-4
        leading-6
        border-b
        border-slate-400
    `}
    p{
        display: flex;
        font-family: "Manjari", sans-serif;
        color: ${(props) => (props.themeColor ? "#232339" : "#FFFFFF")};
        font-size: 1rem;
        @media (max-width: 768px){
            text-align: center;
            width: 53%;
            margin: 0 auto;
        }
    }
    span{
        color: #79819A;
        font-size: 2rem;
    }
    .last-p-class{
        margin-left: 1.1rem;
    }
    small{
        margin-left: 0.7rem;
        font-style: italic;
        color: #79819A;
        margin-bottom: 1rem;
    }
    @media (max-width: 768px){
        text-align: center;
    }
`