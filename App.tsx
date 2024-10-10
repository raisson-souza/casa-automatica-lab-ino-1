import { Text, View } from "react-native"
import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { Home } from "./src/screens/Home"
import { StatusBar } from "expo-status-bar"

type DrawerNavigationParams = {
  Home: undefined
  Gate: undefined
  Lights: undefined
  PresenceSensor: undefined
  WaterBomb: undefined
}

const Drawer = createDrawerNavigator<DrawerNavigationParams>()

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="yellow" style={"dark"} />
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#266C5C"
          },
        }}
      >
        <Drawer.Screen
          options={{
            headerTintColor: "white",
            drawerActiveTintColor: "white",
            drawerInactiveTintColor: "white",
            headerStyle: { backgroundColor: "#266C5C" }
          }}
          name="Home"
          component={ Home }
        />
        <Drawer.Screen
          name="Gate"
          component={ () => (<View><Text>Portão</Text></View>) }
        />
        <Drawer.Screen
          name="Lights"
          component={ () => (<View><Text>Leds</Text></View>) }
        />
        <Drawer.Screen
          name="PresenceSensor"
          component={ () => (<View><Text>Sensor de presença</Text></View>) }
        />
        <Drawer.Screen
          name="WaterBomb"
          component={ () => (<View><Text>Bomba de agua</Text></View>) }
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App