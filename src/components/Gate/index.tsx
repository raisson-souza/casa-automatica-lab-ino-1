import { Button, Text, View } from "react-native"
import { ComponentType } from "../../types/ComponentTypes"
import { useEffect, useState } from "react"

type GateProps = {
} & ComponentType

export default function Gate({ componentStyle, textStyle }: GateProps) {
    const [ gateOpen, setGateOpen ] = useState<boolean>(false)

    useEffect(() => {
        const fetchGate = async () => {

        }
    }, [])

    const moveGate = async (gateOpen: boolean) => {

    }

    return (
        <View style={ componentStyle }>
            <Text style={{ ...textStyle, fontWeight: "bold" }}>PORTÃO</Text>
            <Button
                title={ gateOpen ? "Fechar portão" : "Abrir portão" }
                onPress={ () => moveGate(gateOpen) }
            />
        </View>
    )
}