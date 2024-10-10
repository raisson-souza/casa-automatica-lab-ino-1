import { Button, Text, View } from "react-native"
import { ComponentType } from "../../types/ComponentTypes"
import { useEffect, useState } from "react"

type LightsProps = {
} & ComponentType

export default function Lights({ componentStyle, textStyle }: LightsProps) {
    const [ lightsOn, setLightsOn ] = useState<boolean>()

    useEffect(() => {
        const fetchLights = async () => {

        }
    }, [])

    const changeLights = async () => {

    }

    return (
        <View style={ componentStyle }>
            <Text style={{ ...textStyle, fontWeight: "bold" }}>LUZES</Text>
            <Button
                title={ lightsOn ? "Desligar luzes" : "Ligar luzes" }
                onPress={ () => changeLights }
            />
        </View>
    )
}