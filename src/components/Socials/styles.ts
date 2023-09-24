import { styled } from "styled-components";
import tw from "twin.macro";

export const SocialsContainer = styled.div`
    ${tw`
        pt-2
        px-4
    `}
    .bg-instagram{
        background: radial-gradient(circle at 30% 107%, #FA8F21, #D82D75 40%);
    }
    .bg-facebook{
        background-color: #0866FF;
    }
    .bg-linkedin{
        background-color: #0077B5;
    }
`

export const Title = styled.p`
    ${tw`
        pl-2
        pb-4
        pt-6
        text-xs
        text-slate-400
        font-semibold
        border-t
        border-slate-400
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
        px-2
        py-2
        cursor-pointer
    `}
`