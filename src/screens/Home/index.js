import { StatusBar } from "react-native";
import React from "react";
import { Container, ToolBar, TextToolbar } from "./styles";
import colors from "../../styles/colors";
import CardQuestion from "../../components/CardQuestion";

function Home() {
  StatusBar.setBackgroundColor(colors.primary);

  return (
    <Container>
      <ToolBar>
        <TextToolbar>SENAI OVERFLOW</TextToolbar>
      </ToolBar>
      <CardQuestion />
    </Container>
  );
}

export default Home;
