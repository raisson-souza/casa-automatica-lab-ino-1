import { Screen } from "../components/base/Screen"
import { View, StyleSheet, Text } from 'react-native'
import CassolsHouseTheme from '../components/CassolsHouseTheme'
import HouseStatus from "../components/HouseStatus"

export const Home: React.FC<{}> = () => {
    const ACTIVE_SONG = true

    return (
        <Screen>
            <View style={ styles.container }>
                <HouseStatus />
                <View style={ styles.titleContainer }>
                    <Text style={ styles.title }>Casa Automatizada</Text>
                    <Text style={ styles.title }>Laboratório de Inovação 1</Text>
                </View>
                <CassolsHouseTheme active={ ACTIVE_SONG } />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 60,
    },
    title: {
        marginBottom: 20,
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
    },
    titleContainer: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
})