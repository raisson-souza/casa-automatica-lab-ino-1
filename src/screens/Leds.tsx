import { Led } from "../components/Led"
import { Screen } from "../components/base/Screen"
import { View, StyleSheet } from "react-native"


export const Leds: React.FC<{}> = () => {
    return (
        <Screen>
            <View style={ styles.container }>
                <Led ledName="Quarto01" ledApiName="" />
                <Led ledName="Banheiro" ledApiName="" />
                <Led ledName="Quarto02" ledApiName="" />
                <Led ledName="Corredor" ledApiName="" />
                <Led ledName="Garagem" ledApiName="" />
                <Led ledName="Externo" ledApiName="" />
            </View>
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