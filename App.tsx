import { StyleSheet, Text, View } from "react-native"
import Gate from "./src/components/Gate"
import Lights from "./src/components/Lights"
import PresenceSensor from "./src/components/PresenceSensor"
import React from "react"
import WaterBomb from "./src/components/WaterBomb"

export default function App() {
  return (
    <View style={ styles.container }>
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >Casa Automática</Text>
      <Gate componentStyle={ styles.component } textStyle={ styles.componentText }/>
      <Lights componentStyle={ styles.component } textStyle={ styles.componentText }/>
      <PresenceSensor componentStyle={ styles.component } textStyle={ styles.componentText }/>
      <WaterBomb componentStyle={ styles.component } textStyle={ styles.componentText }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A3A40",
    alignItems: "center",
    justifyContent: "center",
    gap: 30
  },
  component: {
    width: 350,
    height: 100,
    backgroundColor: "#0F5959",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    borderRadius: 15,
  },
  componentText: {
    color: "white",
    fontSize: 18
  },
})