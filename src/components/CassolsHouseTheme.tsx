import { Audio } from "expo-av"
import { Button, Pressable, View, Text, StyleSheet } from "react-native"
import { useEffect, useState } from "react"

type CassolsHouseThemeProps = {
    active: boolean
}

export default function CassolsHouseTheme({ active }: CassolsHouseThemeProps) {
    const [ sound, setSound ] = useState<Audio.Sound | null>(null)
    const [ isPlaying, setIsPlaying ] = useState(false)

    useEffect(() => {
        const loadSound = async () => {
            const { sound } = await Audio.Sound.createAsync(require('../assets/cassol.mp3'))
            setSound(sound)
        }

        loadSound()

        return () => {
            if (sound) sound.unloadAsync()
        }
    }, [])

    const playPauseSong = async () => {
        if (sound) {
            if (isPlaying)
                await sound.pauseAsync()
            else
                await sound.playAsync()
            setIsPlaying(!isPlaying)
        }
    }

    const replaySong = async () => {
        if (sound) {
            if (isPlaying)
                await sound.playFromPositionAsync(0)
            else {
                await sound.playFromPositionAsync(0)
                setIsPlaying(!isPlaying)
            }
        }
    }

    const setSongRate = async (rate: number) => {
        if (sound)
            await sound.setRateAsync(rate, true)
    }

    if (!active) return <></>

    return (
        <View style={ styles.container }>
            <Text style={{ ...styles.title, fontSize: 30 }}>Cassol's House Theme</Text>
            <View style={{ gap: 10 }}>
                <Pressable
                    style={{
                        ...styles.button,
                        backgroundColor: isPlaying ? "yellow" : "green"
                    }}
                    onPress={ playPauseSong }
                >
                <Text
                    style={{
                        fontSize: 18,
                        color: isPlaying ? "black" : "white"
                    }}
                >
                    { isPlaying ? 'Pausar' : 'Tocar' }
                </Text>
                </Pressable>
                <Button title="Resetar" onPress={ replaySong } />
            </View>
            <View style={ styles.slowedVersionBtn }>
                <Pressable
                    style={{
                        ...styles.button,
                        backgroundColor: "black"
                    }}
                    onPress={ () => setSongRate(0.8) }
                >
                    <Text
                        style={{
                            fontSize: 18,
                            color: "white"
                        }}
                    >
                        Slowed Version
                    </Text>
                </Pressable>
                <Pressable
                    style={{
                        ...styles.button,
                        backgroundColor: "white"
                    }}
                    onPress={ () => setSongRate(1) }
                >
                    <Text
                        style={{
                            fontSize: 18,
                            color: "black"
                        }}
                    >
                        Normal Version
                    </Text>
                </Pressable>
                <Pressable
                        style={{
                            ...styles.button,
                            backgroundColor: "purple"
                        }}
                        onPress={ () => setSongRate(2) }
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                color: "white"
                            }}>
                                Speed Version
                        </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 20,
        color: "white",
    },
    container: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 100,
        height: 30,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slowedVersionBtn: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        alignSelf: "center",
        gap: 10,
        paddingTop: 20,
    },
})