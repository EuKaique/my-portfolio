import { styled } from "styled-components";
import tw from "twin.macro";

export const ContactContainer = styled.div`
    ${tw`
        pt-2
        px-4
    `}
`

export const Title = styled.p`
    ${tw`
        pl-2
        pb-4
        text-xs
        text-slate-400
        font-semibold
    `}
`

export const ListItems = styled.ul`
    ${tw`
        flex
        flex-col
        list-none
    `}
`

export const ListItem = styled.li<{themeColor: boolean}>`
    ${tw`
        leading-6
        flex
        items-center
        gap-4
        mb-4
    `}
    p{
        font-size: 0.9rem;
        font-weight: 600;
        color: #79819A;
    }
    h3{
        font-size: 0.9rem;
        font-weight: 400;
        color: ${(props) => (props.themeColor ? "#232339" : "#FFFFFF")};
    }
`

export const IconContainer = styled.div`
    ${tw`
        rounded-full
        bg-slate-700
        px-2
        py-2
    `}
`