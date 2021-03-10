import styled from "styled-components/native";
import colors from "../../styles/colors";
import { TextDefault } from "../../styles/styleGlobal";

export const Content = styled.View`
  flex: 1;
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export const Label = styled(TextDefault)`
  width: 95%;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const TextInputLogin = styled.TextInput`
  width: 95%;
  color: ${colors.light};
  padding: 10px;
  margin-bottom: 15px;

  background-color: ${colors.darkGray};
  font-size: 20px;
  border-radius: 8px;
`;

