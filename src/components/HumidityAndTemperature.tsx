import { Screen } from "./base/Screen"
import { Text, View, StyleSheet } from "react-native"
import React, { useEffect, useState } from "react"
import Service from "../services/Service"

type HumidityAndTemperatureProps = { }

type Dht = {
    temperature: number
    humidity: number
}

export const HumidityAndTemperature: React.FC<HumidityAndTemperatureProps> = ({ }) => {
    const [ dht, setDht ] = useState<Dht | null>(null)

    useEffect(() => {
        const interval = setInterval(async () => {
            await Service.GetDht()
                .then(result => {
                    // ...
                })
        }, 5000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <Screen>
            <View style={ styles.container }>
                <Text style={ styles.text }>TEMPERATURA { dht?.temperature }</Text>
                <Text style={ styles.text }>UMIDADE { dht?.humidity }</Text>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        borderColor: "grey",
        borderRadius: 15,
        borderStyle: "solid",
        borderWidth: 1,
        padding: 10,
        width: "50%",
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    }
})