import env from "../config/env"
import Endpoints from "./base/Endpoints"

export default abstract class Service extends Endpoints {
    static async SetGate(action: boolean) {
        return await fetch(`${ env.BackendUrl() }/portao?acao=${ action ? "abrir" : "fechar" }`, { method: "POST", headers: { 'Content-Type': 'application/json' } })
    }

    static async GetWaterBomb() {
        return await fetch(`${ env.BackendUrl() }/led?nome=LED7`, { method: "GET", headers: { 'Content-Type': 'application/json' } })
            .then(async (result) => {
                const json = await result.json()
                return json
            })
    }

    static async SetWaterBomb(action: boolean) {
        return await fetch(`${ env.BackendUrl() }/led?nome=LED7&ligar=${ action }`, { method: "POST", headers: { 'Content-Type': 'application/json' } })
    }

    static async GetLed(led: string) {
        return await fetch(`${ env.BackendUrl() }/led?nome=${ led }`, { method: "GET", headers: { 'Content-Type': 'application/json' } })
            .then(async (result) => {
                const json = await result.json()
                return json
            })
    }

    static async SetLed(led: string, action: boolean = true) {
        return await fetch(`${ env.BackendUrl() }/led?nome=${ led }&ligar=${ action }`, { method: "POST", headers: { 'Content-Type': 'application/json' } })
    }

    static async GetDht() {
        return await fetch(`${ env.BackendUrl() }/dht`, { method: "GET", headers: { 'Content-Type': 'application/json' } })
            .then(async (result) => {
                const json = await result.json()
                return json
            })
    }
}