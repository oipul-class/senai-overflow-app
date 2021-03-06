import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  border-radius: 4px;
  border-width: 2px;
  border-color: ${({disabled}) => disabled ? colors.darkGray : colors.primary};
  padding: 10px;
`;

export const Text = styled.Text`
  color: ${colors.light};
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;
