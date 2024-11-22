import { createDrawerNavigator } from "@react-navigation/drawer"
import { Home } from "./src/screens/Home"
import { HumidityAndTemperature } from "./src/components/HumidityAndTemperature"
import { Leds } from "./src/screens/Leds"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import Gate from "./src/components/Gate"
import React from "react"
import WaterBomb from "./src/components/WaterBomb"

type DrawerNavigationParams = {
  Home: undefined
  Gate: undefined
  Lights: undefined
  WaterBomb: undefined
  HumidityAndTemperature: undefined
}

const Drawer = createDrawerNavigator<DrawerNavigationParams>()

const drawerScreenStyle = {
  headerTintColor: "white",
  drawerActiveTintColor: "white",
  drawerInactiveTintColor: "white",
  headerStyle: { backgroundColor: "#266C5C" }
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#34856A"/>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#266C5C",
          },
        }}
      >
        <Drawer.Screen
          options={ drawerScreenStyle }
          name="Home"
          component={ Home }
        />
        <Drawer.Screen
          options={{ ...drawerScreenStyle, title: "Portão" }}
          name="Gate"
          component={ Gate }
        />
        <Drawer.Screen
          options={{ ...drawerScreenStyle, title: "LEDs" }}
          name="Lights"
          component={ Leds }
        />
        <Drawer.Screen
          options={{ ...drawerScreenStyle, title: "Bomba de Água" }}
          name="WaterBomb"
          component={ WaterBomb }
        />
        <Drawer.Screen
          options={{ ...drawerScreenStyle, title: "DHT" }}
          name="HumidityAndTemperature"
          component={ HumidityAndTemperature }
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App