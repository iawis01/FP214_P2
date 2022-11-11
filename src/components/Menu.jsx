import React from "react";
import Evolucion from "../screens/Evolucion";
import Inicio from "./Inicio";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Perfil from "../screens/Perfil";
import NuevoReto from "../screens/NuevoReto";
import Configuracion from "../screens/Configuracion";
import SobreNosotros from "../screens/SobreNosotros";
import Contactar from "../screens/Contactar";

const Tab = createBottomTabNavigator();

function Menu() {
  return (
    <Tab.Navigator

      initialRouteName="Inicio"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "green",
        tabBarStyle: {
          display: "flex",
          height: 50,
          paddingHorizontal: 0,
          paddingTop: 0,
          backgroundColor: "rgba(34,36,40,1)",
          position: "absolute",
          borderTopWidth: 0,
          headerShown: false

        
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Inicio}
        options={{
          headerShown: true,
          //headerBackground: appBarNavigate,
          headerTitle: "holis",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Evolucion"
        component={Evolucion}
        options={{
          tabBarLabel: "Evolucion",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chevron-triple-right"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NuevoReto"
        component={NuevoReto}
        options={{
          tabBarLabel: "Nuevo Reto",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="upload" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="card-account-details"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contactar"
        component={Contactar}
        options={{
          tabBarLabel: "Contactar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="human-greeting-proximity"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SobreNosotros"
        component={SobreNosotros}
        options={{
          tabBarLabel: "Sobre nosotros",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="contacts-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Configuracion"
        component={Configuracion}
        options={{
          tabBarLabel: "Configuracion",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="tire" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Menu;
