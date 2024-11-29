import { Screen } from "../components/base/Screen"
import LightSensorComponent from "../components/LightSensor"

export const LightSensorScreen: React.FC<{}> = () => {
    return (
        <Screen>
            <LightSensorComponent />
        </Screen>
    )
}