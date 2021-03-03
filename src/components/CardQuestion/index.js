import React from "react";
import {
  CardHeader,
  ImageProfile,
  HeaderContent,
  TextPoster,
  TextDate,
  Container,
  CardBody,
  TextTitle,
  TextDescription,
  ImageQuestion,
  CardFooter,
  InputAnswer,
  ContainerInputAnswer,
  SendIcon,
  ContainerAwnser,
} from "./styles";

import fotoPerfil from "../../../assets/defaultProfilePhoto.png";
import colors from "../../styles/colors";

function CardAwnser() {
  return (
    <ContainerAwnser>
      <CardHeader>
        <ImageProfile source={fotoPerfil} />
        <HeaderContent>
          <TextPoster>por fulano</TextPoster>
          <TextDate>em 10/10/2010 ás 10:10</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextDescription>Essa é a descrição da resposta</TextDescription>
      </CardBody>
    </ContainerAwnser>
  );
}

function CardQuestion() {
  return (
    <Container>
      <CardHeader>
        <ImageProfile source={fotoPerfil} />
        <HeaderContent>
          <TextPoster>por fulano</TextPoster>
          <TextDate>em 10/10/2010 ás 10:10</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextTitle>Titulo da questão</TextTitle>
        <TextDescription>Descrição da questão fica aqui</TextDescription>
        <ImageQuestion source={fotoPerfil} />
      </CardBody>
      <CardFooter>
        <TextPoster>Seja o primeiro a responder</TextPoster>
        <CardAwnser />

        <ContainerInputAnswer>
          <InputAnswer
            placeholder="responda a essa pergunta"
            placeholderTextColor={colors.lightTransparent}
          />
          <SendIcon name="paper-plane" />
        </ContainerInputAnswer>
      </CardFooter>
    </Container>
  );
}

export default CardQuestion;
