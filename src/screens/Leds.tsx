import { Led } from "../components/Led"
import { Screen } from "../components/base/Screen"
import { StyleSheet, ScrollView, Text, Pressable } from "react-native"
import Service from "../services/Service"

export const Leds: React.FC<{}> = () => {
    const turnAll = async (action: boolean) => {
        const ledsNames = ["LED1", "LED2", "LED3", "LED4", "LED5", "LED6"]

        for (const ledName of ledsNames) {
            await Service.SetLed(ledName, action)
        }
    }

    return (
        <Screen>
            <ScrollView
                style={{ flex: 1, width: "100%" }}
                contentContainerStyle={ styles.container }
            >
                <Pressable
                    onPress={ () => turnAll(false) }
                    style={ styles.pressable }
                >
                    <Text style={ styles.pressableText }>
                        APAGAR TODOS OS LEDS
                    </Text>
                </Pressable>
                <Pressable
                    onPress={ () => turnAll(true) }
                    style={ styles.pressable }
                >
                    <Text style={ styles.pressableText }>
                        LIGAR TODOS OS LEDS
                    </Text>
                </Pressable>
                <Led ledAPIName="LED1" ledFriendlyName="Quarto 01" />
                <Led ledAPIName="LED2" ledFriendlyName="Banheiro" />
                <Led ledAPIName="LED3" ledFriendlyName="Corredor" />
                <Led ledAPIName="LED4" ledFriendlyName="Quarto 2" />
                <Led ledAPIName="LED5" ledFriendlyName="Garagem" />
                <Led ledAPIName="LED6" ledFriendlyName="Externo" />
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    pressable: {
        backgroundColor: "royalblue",
        width: 200,
        height: 100,
        display: "flex",
        justifyContent: "center",
        textAlignVertical: "center",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
        borderRadius: 15,
    },
    pressableText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
})