import { Screen } from "../components/base/Screen"
import Gate from "../components/Gate"

export default function GateScreen({}) {
    return (
        <Screen>
            <Gate componentStyle={{ justifyContent: "center", alignItems: "center", gap: 10 }} textStyle={{ color: "white" }} />
        </Screen>
    )
}