import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Alert, StatusBar, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import colors from "../../styles/colors";
import { Container, ToolBar, TextToolbar } from "../../styles/styleGlobal";
import { Content, Label, TextInputLogin } from "./styles";

function Login({ navigation }) {
  StatusBar.setBackgroundColor(colors.primary);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    verifyLoginInfo();
  }, [loginInfo]);

  const [LogInButton, setLogInButton] = useState(false);

  const handleInputEmail = (text) => {
    setLoginInfo({ ...loginInfo, email: text });
  };

  const handleInputPassword = (text) => {
    setLoginInfo({ ...loginInfo, password: text });
  };

  const verifyLoginInfo = () => {
    if (loginInfo.email.length > 10 && loginInfo.password.length > 7)
      return setLogInButton(false);
    else return setLogInButton(true);
  };

  const handleLogIn = async () => {
    try {
      const response = await api.post("/sessions", loginInfo);
      console.log(response.data);
      if (response.data.token) {
        signIn(response.data);
        navigation.navigate("Home");
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        Alert.alert("Ops", error.response.data.error);
      }
    }
  };

  return (
    <Container>
      <ToolBar>
        <TextToolbar>Faça login</TextToolbar>
      </ToolBar>
      <Content>
        <Label>Email</Label>
        <TextInputLogin
          placeholder="Digite o seu email"
          placeholderTextColor={colors.lightTransparent}
          autoCompleteType="email"
          onChangeText={(text) => {
            handleInputEmail(text);
          }}
        />

        <Label>Senha</Label>
        <TextInputLogin
          placeholder="Digite a sua senha"
          placeholderTextColor={colors.lightTransparent}
          autoCompleteType="password"
          onChangeText={(text) => {
            handleInputPassword(text);
          }}
          secureTextEntry={true}
        />

        <Button
          disabled={LogInButton}
          text="Entrar"
          style={{ width: "95%" }}
          onPress={handleLogIn}
        />
      </Content>
    </Container>
  );
}

export default Login;
