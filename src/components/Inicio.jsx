import React from "react";
import {Image, View } from "react-native";
import imagenDeFondo from "../../assets/background_image.jpg";
import styles from "../styles/StyleInicio";

const Inicio = () => {
  return (
    <View style={styles.container}>
      <Image source={imagenDeFondo} style={styles.ImageBackground}></Image>
    </View>
  );
};

export default Inicio;
