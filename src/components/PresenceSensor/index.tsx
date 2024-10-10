import { ComponentType } from "../../types/ComponentTypes"
import { Text, View } from "react-native"
import { useEffect, useState } from "react"

type PresenceSensorProps = {
} & ComponentType

export default function PresenceSensor({ componentStyle, textStyle }: PresenceSensorProps) {
    const [ proximity, setProximity ] = useState<number>(0)

    useEffect(() => {
        fetchPromixity()
        const interval = setInterval(fetchPromixity, 2000)
        return () => clearInterval(interval)
    }, [])

    const fetchPromixity = async () => {

    }

    return (
        <View style={ componentStyle }>
            <Text style={{ ...textStyle, fontWeight: "bold" }}>Sensor de presença</Text>
            <Text style={ textStyle }>Distância { proximity } (unidade de medida)</Text>
        </View>
    )
}