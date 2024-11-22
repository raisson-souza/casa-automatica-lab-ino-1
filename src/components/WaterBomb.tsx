import { ActivityIndicator, Button, Text, View } from "react-native"
import { Screen } from "./base/Screen"
import { useEffect, useState } from "react"
import { useFocusEffect } from "@react-navigation/native"
import Service from "../services/Service"

export default function WaterBomb() {
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
        <Screen>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                }}
            >
                {
                    loading
                        ? <>
                            <Text style={{ color: "white", fontWeight: "bold" }}>Carregando estado da Bomba de Agua</Text>
                            <ActivityIndicator size="large" />
                        </>
                        : <>
                            <Text style={{ color: "white", fontWeight: "bold" }}>Bomba de água</Text>
                            <Button
                                title={ waterRunning ? "Parar bomba" : "Ligar bomba" }
                                onPress={ () => turnWaterBombOn() }
                            />
                        </>
                }
            </View>
        </Screen>
    )
}