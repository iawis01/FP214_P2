import React from "react";
import{StyleSheet,Image, View,} from 'react-native'
import imagenDeFondo from '../../assets/background_image.jpg'
//import styles from './Inicio.module.css';


const Inicio = () =>{
  return(
    <View style={styles.container}>
      <Image source={imagenDeFondo} style={styles.ImageBackground}>
     </Image>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flexGrow: 1
  },
  ImageBackground: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
  },
 
 });

export default Inicio