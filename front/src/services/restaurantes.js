import {http} from './config'

export default {

    listar:() => {
        return http.get('restaurants')
    },


    salvar:(restaurante) => {
        return http.post('restaurants', restaurante )
    }
    
}