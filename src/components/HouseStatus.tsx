import { ActivityIndicator, Text, View, StyleSheet, Pressable } from "react-native"
import { useEffect, useState } from "react"
import env from "../config/env"

export default function HouseStatus() {
    const [ loading, setLoading ] = useState<boolean>(true)
    const [ houseOn, setHouseOn ] = useState<boolean>(false)

    const fetchHouseStatus = async () => {
        await fetch(`${ env.BackendUrl() }/led?nome=LED1`, { method: "GET", headers: { 'Content-Type': 'application/json' } })
            .then(async (response) => {
                const json = await response.json()
                if (json === true || json === false) {
                    setHouseOn(true)
                    return
                }
                setHouseOn(false)
            })
            .catch(() => {
                setHouseOn(false)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchHouseStatus()
    }, [])

    const btn = () => {
        return (
            <Pressable onPress={ () => { setLoading(true); fetchHouseStatus() } }>
                {
                    houseOn
                        ? <Text style={{ ...styles.text, color: "green" }}>Casa ONLINE</Text>
                        : <Text style={{ ...styles.text, color: "red" }}>Casa OFFLINE</Text>
                }
            </Pressable>
        )
    }

    return (
        <View>
            {
                loading
                    ? (
                        <View style={ styles.loadingContainer }>
                            <Text style={ styles.text }>Buscando casa...</Text>
                            <ActivityIndicator />
                        </View>
                    )
                    : btn()
            }
        </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    text: {
        color: "white",
        fontSize: 20,
    },
})