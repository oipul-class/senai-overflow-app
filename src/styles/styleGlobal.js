import { StatusBar } from "react-native";
import styled from "styled-components/native";
import colors from "./colors";

export const TextDefault = styled.Text`
    font-size: 16px;
    color: ${colors.light};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${colors.dark};
  padding-top: ${StatusBar.currentHeight}px;
`;

export const ToolBar = styled.View`
  width: 100%;
  height: 50px;

  flex-direction: row;
  align-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${colors.light};

  background-color: ${colors.primary};
  
`;

export const TextToolbar = styled(TextDefault)`
    flex: 1;
    font-size: 20px;
    color: ${colors.dark};
    font-weight: bold;
    text-align: center;
`;
