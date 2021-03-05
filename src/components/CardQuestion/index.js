import React, { useState } from "react";
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
import { FlatList, TouchableOpacity } from "react-native";

function CardAwnser({ awnser }) {
  return (
    <ContainerAwnser>
      <CardHeader>
        <ImageProfile
          source={
            awnser.Student.image ? { uri: awnser.Student.image } : fotoPerfil
          }
        />
        <HeaderContent>
          <TextPoster>{awnser.Student.name}</TextPoster>
          <TextDate>em {awnser.createdAt}</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextDescription>{awnser.answer}</TextDescription>
      </CardBody>
    </ContainerAwnser>
  );
}

function CardQuestion({ question }) {
  const [showAwnsers, setShowAwnsers] = useState(false);

  return (
    <Container>
      <CardHeader>
        <ImageProfile
          source={
            question.Student.image
              ? { uri: question.Student.image }
              : fotoPerfil
          }
        />
        <HeaderContent>
          <TextPoster>{question.Student.name}</TextPoster>
          <TextDate>{question.createdAt}</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextTitle>{question.title}</TextTitle>
        <TextDescription>{question.description}</TextDescription>
        <ImageQuestion
          source={question.image ? { uri: question.image } : fotoPerfil}
        />
      </CardBody>
      <CardFooter>
        <TouchableOpacity
          onPress={() => {
            setShowAwnsers(!showAwnsers);
          }}
        >
          <TextPoster>
            {question.Answers.length === 0
              ? "seja o primeiro a responder"
              : question.Answers.length + " respostas"}
          </TextPoster>
        </TouchableOpacity>
        {showAwnsers && question.Answers.length > 0 && (
          <FlatList
            data={question.Answers}
            keyExtractor={(answer) => String(answer.id)}
            renderItem={({ item: awnser }) => <CardAwnser awnser={awnser} />}
          />
        )}

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

