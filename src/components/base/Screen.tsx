import { StyleSheet, View } from "react-native"

type ScreenProps = {
    children: JSX.Element[] | JSX.Element
}

export const Screen: React.FC<ScreenProps> = ({ children }) => {
    return (
        <View style={ styles.container }>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0A3A40",
        alignItems: "center",
        justifyContent: "center",
        textDecorationColor: "white"
    },
})