import Endpoints from "./base/Endpoints"

export default abstract class ServiceExample extends Endpoints {
    static async Gate() {
        return await this.Get<any>({
            url: "/get_example"
        })
    }

    static async Lights(body: any) {
        return await this.Post<any>({
            url: "/post_example",
            body: body
        })
    }

    static async PresenceSensor(body: any) {
        return await this.Put<any>({
            url: "/put_example",
            body: body
        })
    }

    static async WaterBomb() {
        return await this.Delete<any>({
            url: "/delete_example"
        })
    }
}