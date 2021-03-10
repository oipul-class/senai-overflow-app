import { StatusBar, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Container, ToolBar, TextToolbar, IconSignOut } from "./styles";
import colors from "../../styles/colors";
import CardQuestion from "../../components/CardQuestion";
import { api } from "../../services/api";
import { signOut } from "../../services/security";

function Home({ navigation }) {
  StatusBar.setBackgroundColor(colors.primary);

  const [isLoadingFeed, setIsLoadingFeed] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [page, setPage] = useState(1);

  const loadQuestions = async (reload) => {
    if (isLoadingFeed) return;

    setIsLoadingFeed(true);

    try {
      const response = await api.post(`/feed/?page=${page}`);

      setQuestions([...questions, ...response.data]);
      setIsLoadingFeed(false);
    } catch (error) {
      console.log(error);
      setIsLoadingFeed(false);
    }
  };

  const handleSignOut = () => {
    signOut();
    navigation.navigate("Login");
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <Container>
      <ToolBar>
        <TextToolbar>SENAI OVERFLOW</TextToolbar>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 4,
            alignSelf: "center",
          }}
          onPress={handleSignOut}
        >
          <IconSignOut name="sign-out" />
        </TouchableOpacity>
      </ToolBar>
      <FlatList
        onEndReachedThreshold={0.2}
        onEndReached={() => loadQuestions()}
        style={{ width: "100%" }}
        data={questions}
        keyExtractor={(question) => String(question.id)}
        renderItem={({ item: question }) => (
          <CardQuestion question={question} />
        )}
      />
    </Container>
  );
}

export default Home;
