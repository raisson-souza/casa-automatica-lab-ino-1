import { ActivityIndicator, Button, Text, View } from "react-native"
import { ComponentType } from "../../types/ComponentTypes"
import { useEffect, useState } from "react"
import Service from "../../services/Service"

type GateProps = {
} & ComponentType

export default function Gate({ componentStyle, textStyle }: GateProps) {
    const [ loading, setLoading ] = useState<boolean>(true)
    const [ gateOpen, setGateOpen ] = useState<boolean>(false)

    useEffect(() => {
        const fetchGate = async () => {
            await Service.GetGate()
                .then(result => {
                    setLoading(true)
                    setGateOpen(result)
                })
        }
        fetchGate()
    }, [])

    const moveGate = async (gateOpen: boolean) => {
        await Service.SetGate(gateOpen)
            .then(() => {
                setGateOpen(!gateOpen)
            })
    }

    return (
        <View style={ componentStyle }>
            {
                loading
                    ? <>
                        <Text style={{ ...textStyle, fontWeight: "bold" }}>Carregando estado do portão</Text>
                        <ActivityIndicator size="large" />
                    </>
                    : <>
                        <Text style={{ ...textStyle, fontWeight: "bold" }}>PORTÃO</Text>
                        <Button
                            title={ gateOpen ? "Fechar portão" : "Abrir portão" }
                            onPress={ () => moveGate(gateOpen) }
                        />
                    </>
            }
        </View>
    )
}