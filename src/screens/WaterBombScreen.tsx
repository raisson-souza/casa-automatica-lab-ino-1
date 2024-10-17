import { Screen } from "../components/base/Screen"
import WaterBomb from "../components/WaterBomb"

export default function WaterBombScreen({}) {
    return (
        <Screen>
            <WaterBomb componentStyle={{ justifyContent: "center", alignItems: "center", gap: 10 }} textStyle={{ color: "white" }} />
        </Screen>
    )
}