import React from "react";
import Home from "./src/screens/Home";
import "react-native-gesture-handler";
import Login from "./src/screens/Login";
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import { isSignedIn } from "./src/services/security";

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isSignedIn() ? "Home" : "Login"} screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
