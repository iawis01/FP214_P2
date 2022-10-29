import React from "react";
import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants'
import{StyleSheet,Image, Text, View,ImageBackground} from 'react-native'
import imagenDeFondo from '../../assets/background_image.jpg'

const Main = () =>{
  return(
    <View style={{marginTop: 0, flexGrow: 1}}>
      <Image source={imagenDeFondo} style={styles.ImageBackground}>
     </Image>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageBackground: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
  },
 
 });

export default Main