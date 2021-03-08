import {http} from './config'

export default {

    listar:() => {
        return http.get('customers')
    },


    salvar:(usuario) => {
        return http.post('customers', usuario )
    }
    
}