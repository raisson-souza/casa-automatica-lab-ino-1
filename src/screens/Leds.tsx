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
                <Led ledName="Quarto01" ledApiName="" />
                <Led ledName="Banheiro" ledApiName="" />
                <Led ledName="Quarto02" ledApiName="" />
                <Led ledName="Corredor" ledApiName="" />
                <Led ledName="Garagem" ledApiName="" />
                <Led ledName="Externo" ledApiName="" />
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