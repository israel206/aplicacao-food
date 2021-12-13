import {http} from './config'
// configuração 
export default {

    listar:() => {
        return http.get('products')
    },

    salvar:(produto) => {
        return http.post('products', produto )
    }
    
}