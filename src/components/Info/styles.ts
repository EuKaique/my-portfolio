import { styled } from "styled-components";
import tw from "twin.macro";

export const InfoContainer = styled.div`
    ${tw`
        py-8
        px-4
    `}
`
export const AvatarContainer = styled.div`
    ${tw`
        flex
        justify-between
        items-center
        gap-36
    `}
    img{
        border-radius: 50%;
        width: 9rem;
        height: 8.5rem;
        filter: grayscale(80%);
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
        font-size: 1.5rem;
        font-weight: 500;
    }
    h3{
        background: linear-gradient(to right, #A478E8, #E2E6EE);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-size: 1.2rem;
        font-weight: 600;
    }
`

export const MessagingContainer = styled.div<{themeColor: boolean}>`
    ${tw`
        flex
        flex-col
        mb-4
        leading-6
    `}
    p{
        display: flex;
        font-family: "Manjari", sans-serif;
        color: ${(props) => (props.themeColor ? "#232339" : "#FFFFFF")};
    }
    span{
        color: #79819A;
        font-size: 2rem;
        padding: 0 0.2rem;
    }
    .last-p-class{
        margin-left: 1.1rem;
    }
    small{
        margin-left: 1.1rem;
        font-style: italic;
        color: #79819A;
    }
`