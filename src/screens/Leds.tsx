import { Led } from "../components/Led"
import { Screen } from "../components/base/Screen"

export const Leds: React.FC<{}> = () => {
    return (
        <Screen>
            <Led ledName="x" />
        </Screen>
    )
}