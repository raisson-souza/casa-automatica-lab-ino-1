import { ActivityIndicator, Button, Text, View } from "react-native"
import { ComponentType } from "../../types/ComponentTypes"
import { useEffect, useState } from "react"
import { useFocusEffect } from "@react-navigation/native"
import Service from "../../services/Service"

type WaterBombProps = {
} & ComponentType

export default function WaterBomb({ componentStyle, textStyle }: WaterBombProps) {
    const [ loading, setLoading ] = useState<boolean>(true)
    const [ waterRunning, setWaterRunning ] = useState<boolean | null>(null)

    useEffect(() => {
        const fetchWaterBomb = async () => {
            await Service.GetWaterBomb()
                .then(result => {
                    setLoading(false)
                    setWaterRunning(result)
                })
        }
        fetchWaterBomb()
    }, [])

    useFocusEffect(() => {
        return () => {
        }
    })

    const turnWaterBombOn = async () => {
        await Service.SetWaterBomb(!waterRunning)
            .then(() => {
                setWaterRunning(!waterRunning)
            })
    }

    return (
        <View style={ componentStyle } >
            {
                loading
                    ? <>
                        <Text style={{ ...textStyle, fontWeight: "bold" }}>Carregando estado da Bomba de Agua</Text>
                        <ActivityIndicator size="large" />
                    </>
                    : <>
                        <Text style={{ ...textStyle, fontWeight: "bold" }}>Bomba de água</Text>
                        <Button
                            title={ waterRunning ? "Parar bomba" : "Ligar bomba" }
                            onPress={ () => turnWaterBombOn() }
                        />
                    </>
            }
        </View>
    )
}