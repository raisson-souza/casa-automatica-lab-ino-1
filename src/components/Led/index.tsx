import { Button, Text, View, StyleSheet, ActivityIndicator } from "react-native"
import React, { useEffect, useState } from "react"
import Service from "../../services/Service"

type LedProps = {
    ledName: string
}

export const Led: React.FC<LedProps> = ({ ledName }) => {
    const [ ledOn, setLedOn ] = useState<boolean | null>(null)
    const [ loading, setLoading ] = useState<boolean>(true)

    useEffect(() => {
        const fetchLights = async () => {
            await Service.GetLed(ledName)
                .then(result => {
                    setLoading(false)
                    setLedOn(result)
                })
        }
        fetchLights()

        return () => {
            console.log("saindo")
            setLoading(true)
        }
    }, [])

    const changeLights = async () => {
        await Service.SetLed(ledName, !ledOn)
            .then(() => {
                setLedOn(!ledOn)
            })
    }

    return (
        <View style={ styles.container }>
            {
                loading
                    ? <>
                        <Text style={{ ...styles.text, fontWeight: "bold" }}>Carregando estado do LED { ledName }</Text>
                        <ActivityIndicator size="large" />
                    </>
                    : <>
                        <Text style={ styles.text }>Led { ledName } ({ ledOn ? "ON" : "OFF" })</Text>
                        <Button
                            title={ ledOn ? "Desligar" : "Ligar" }
                            onPress={ () => changeLights() }
                        />
                    </>
            }
        </View>
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
    }
})