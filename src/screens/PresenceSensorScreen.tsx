import { Screen } from "../components/base/Screen"
import PresenceSensor from "../components/PresenceSensor"

export default function PresenceSensorScreen({}) {
    return (
        <Screen>
            <PresenceSensor componentStyle={{ justifyContent: "center", alignItems: "center", gap: 10 }} textStyle={{ color: "white" }}/>
        </Screen>
    )
}