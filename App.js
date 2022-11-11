import React from "react";
import Inicio from "./src/components/Inicio";
import Menu from "./src/components/Menu";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Menu />
      </NavigationContainer>
     
     
  );
}

;
