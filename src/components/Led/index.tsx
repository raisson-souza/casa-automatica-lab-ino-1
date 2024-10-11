import { Button, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import Service from "../../services/Service"

type LedProps = {
    ledName: string
}

export const Led: React.FC<LedProps> = ({ ledName }) => {
    const [ lightsOn, setLightsOn ] = useState<boolean>(false)
    const [ loading, setLoading ] = useState<boolean>(false) // TODO: ajustar após rota de GET

    useEffect(() => {
        const fetchLights = async () => {

        }
    }, [])

    const changeLights = async () => {
        await Service.SetLed("", true)
    }

    return (
        <View>
            {
                loading
                    ? <Text>Carregando informações do ESP 32</Text>
                    : (
                        <Button
                            title={ lightsOn ? `Desligar led ${ ledName }` : `Ligar led ${ ledName }` }
                            onPress={ () => changeLights() }
                        />
                    )
            }
        </View>
    )
}