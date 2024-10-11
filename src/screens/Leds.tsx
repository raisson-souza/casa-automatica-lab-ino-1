import { Led } from "../components/Lights"
import { Screen } from "../components/base/Screen"

export const Leds: React.FC<{}> = () => {
    return (
        <Screen>
            <Led ledName="x" />
        </Screen>
    )
}