import { ComponentType } from "../../types/ComponentTypes"
import { Button, Text, View } from "react-native"
import { useState } from "react"

type WaterBombProps = {
} & ComponentType

export default function WaterBomb({ componentStyle, textStyle }: WaterBombProps) {
    const [ waterRunning, setWaterRunning ] = useState<boolean>(false)

    const turnWaterBombOn = async () => {

    }

    return (
        <View style={ componentStyle } >
            <Text style={{ ...textStyle, fontWeight: "bold" }}>Bomba de água</Text>
            <Button
                title={ waterRunning ? "Parar bomba" : "Ligar bomba" }
                onPress={ () => turnWaterBombOn() }
            />
        </View>
    )
}