import {http} from './config'

export default {

    listar:() => {
        return http.get('products')
    },


    salvar:(produto) => {
        return http.post('products', produto )
    }
    
}