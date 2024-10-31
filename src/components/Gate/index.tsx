import { ComponentType } from "../../types/ComponentTypes"
import { Pressable, Text, View } from "react-native"
import { useState } from "react"
import Service from "../../services/Service"

type GateProps = {
} & ComponentType

export default function Gate({ componentStyle, textStyle }: GateProps) {
    const [ gateOpen, setGateOpen ] = useState<boolean>(false)

    const moveGate = async (gateOpen: boolean) => {
        await Service.SetGate(gateOpen)
            .then(result => {
                setGateOpen(!gateOpen)
            })
    }

    return (
        <View style={ componentStyle }>
            <Text style={{ ...textStyle, fontWeight: "bold" }}>PORTÃO</Text>
            <Pressable
                onPress={ () => moveGate(gateOpen) }
                style={{
                    backgroundColor: "royalblue",
                    width: 150,
                    height: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 15
                }}
            >
            <Text
                style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold"
                }}>
                    { gateOpen ? "FECHAR" : "ABRIR" }
            </Text>
            </Pressable>
        </View>
    )
}