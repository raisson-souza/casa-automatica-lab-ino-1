import Endpoints from "./base/Endpoints"

export default abstract class Service extends Endpoints {
    static async GetGate() {
        return await this.Get<any>({
            url: "/get_example"
        })
    }

    static async SetGate() {
        return await this.Post<any>({
            url: "/get_example"
        })
    }

    static async GetPresenceSensor(body: any) {
        return await this.Get<any>({
            url: "/put_example",
        })
    }

    static async GetWaterBomb() {
        return await this.Get<any>({
            url: "/delete_example"
        })
    }

    static async SetWaterBomb() {
        return await this.Post<any>({
            url: "/delete_example"
        })
    }

    static async GetLed(led: string) {
        return await this.Get<string>({
            url: "",
        })
    }

    static async SetLed(led: string, action: boolean = true) {
        return await this.Post<string>({
            url: "",
            body: {}
        })
    }
}