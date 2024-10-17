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
                <Led ledName="LED1" />
                <Led ledName="LED2" />
                <Led ledName="LED3" />
                <Led ledName="LED4" />
                <Led ledName="LED5" />
                <Led ledName="LED6" />
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
})