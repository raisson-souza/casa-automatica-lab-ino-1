import { Pressable, Text, View } from "react-native"
import { Screen } from "./base/Screen"
import { useState } from "react"
import Service from "../services/Service"

export default function Gate() {
    const [ gateOpen, setGateOpen ] = useState<boolean>(false)

    const moveGate = async (gateOpen: boolean) => {
        await Service.SetGate(gateOpen)
            .then(result => {
                setGateOpen(!gateOpen)
            })
    }

    return (
        <Screen>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                }}
            >
                <Text style={{ color: "white", fontWeight: "bold" }}>PORTÃO</Text>
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
        </Screen>
    )
}