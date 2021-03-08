'use strict';


const repository = require('../repositories/order-repository');
const guid = require('guid');
const authService = require('../services/auth-service');
//guid é um pacote para gerar números para o pedido


exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async (req, res, next) => {

    try {

        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        //recuperar o token

        const data = await authService.decodeToken(token);
        //decodificar o token  


        await repository.create({
            restaurant: data.id,        
            customer: data.id,
            number: guid.raw().substring(0, 6),
            //gera um guid e pega os 6 primeiros caracteres
            items: req.body.items
        });
        res.status(201).send({
            message: 'Pedido solicitado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};