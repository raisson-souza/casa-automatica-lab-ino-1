import { Led } from "../components/Led"
import { Screen } from "../components/base/Screen"
import { StyleSheet,ScrollView } from "react-native"

export const Leds: React.FC<{}> = () => {
    return (
        <Screen>
            <ScrollView
                style={{
                    flex: 1,
                    width: "100%"
                }}
                contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 20,
                    marginTop: 10,
                    marginBottom: 10,
                }}
            >
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
    // container: {
    //     flex: 1,
    //     gap: 20,
    //     width: "100%",
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
})