/**
 * Classe responsável pelo gerenciamento geral de responses.
 * TODO: A classe possui propriedades específicas, remover se conveniente.
*/
export default class Response<T> {
    /**
     * Status da requisição.
     * Obtido através do status padrão da response.status.
     * */
    Status: number
    /**
     * Retorno da requisição
     * Propriedade personalizada. <- remover se conveniente
     * */
    Data: T

    constructor(data : any) {
        this.Status = data["status"]
        this.Data = data["data"]
    }
}