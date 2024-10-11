import { Button, Text, View, StyleSheet } from "react-native"
import React, { useEffect, useState } from "react"
import Service from "../../services/Service"

type LedProps = {
    ledName: string
    ledApiName: string
}

export const Led: React.FC<LedProps> = ({ ledName, ledApiName }) => {
    const [ lightsOn, setLightsOn ] = useState<boolean>(false)
    const [ loading, setLoading ] = useState<boolean>(false) // TODO: ajustar após rota de GET

    useEffect(() => {
        const fetchLights = async () => {

        }
        fetchLights()
    }, [])

    const changeLights = async () => {
        await Service.SetLed("", true) // TODO: ledApiName aqui
    }

    return (
        <View style={ styles.container }>
            {
                loading
                    ? <Text style={ styles.text }>Carregando informações do ESP 32</Text>
                    : <>
                        <Text style={ styles.text }>Led { ledName }</Text>
                        <Button
                            title={ lightsOn ? "Desligar" : "Ligar" }
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