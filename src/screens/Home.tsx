import { Audio } from 'expo-av'
import { Screen } from "../components/base/Screen"
import { useEffect, useState } from "react"
import { View, Button, StyleSheet, Text, Pressable } from 'react-native'


export const Home: React.FC<{}> = () => {
    const [ sound, setSound ] = useState<Audio.Sound | null>(null)
    const [ isPlaying, setIsPlaying ] = useState(false)
    const SONG = true

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

    const playPauseMusic = async () => {
        if (sound) {
            if (isPlaying)
                await sound.pauseAsync()
            else
                await sound.playAsync()
            setIsPlaying(!isPlaying)
        }
    }

    const replayMusic = async () => {
        if (sound) {
            if (isPlaying)
                await sound.playFromPositionAsync(0)
            else {
                await sound.playFromPositionAsync(0)
                setIsPlaying(!isPlaying)
            }
        }
    }

    return (
        <Screen>
            <View style={ styles.container }>
                {
                    SONG
                        ? (
                            <View style={ styles.minorContainers }>
                                <Text style={{ ...styles.title, fontSize: 30 }}>Cassol's House Theme</Text>
                                <View style={{ gap: 10 }}>
                                    <Pressable
                                        style={{
                                            ...styles.button,
                                            backgroundColor: isPlaying ? "yellow" : "green"
                                        }}
                                        onPress={ playPauseMusic }
                                    >
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                color: isPlaying ? "black" : "white"
                                            }}>
                                                { isPlaying ? 'Pausar' : 'Tocar' }
                                        </Text>
                                    </Pressable>
                                    <Button title="Resetar" onPress={ replayMusic } />
                                </View>
                            </View>
                        )
                        : <></>
                }
                <View style={ styles.minorContainers }>
                    <Text style={{ ...styles.title, fontSize: 25 }}>Casa Automatizada</Text>
                    <Text style={{ ...styles.title, fontSize: 25 }}>Laboratório de Inovação 1</Text>
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 60,
    },
    title: {
        marginBottom: 20,
        color: "white",
    },
    minorContainers: {
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
})