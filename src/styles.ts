import { styled } from "styled-components";
import tw from "twin.macro";

export const HomeContainer = styled.menu<{ themeColor: boolean }>`
  background-color: ${(props) => (props.themeColor ? "#EBEBEB" : "#232339")};
  ${tw`
        min-h-screen
        text-white
        text-base
        flex
        px-2
    `}
`;