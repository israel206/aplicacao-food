'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/restaurant-repository');
const md5 = require('md5');
const authService = require('../services/auth-service');
const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');


exports.get = async(req, res, next) => {
    Restaurant
    .find({}).then(data => {
        res.status(200).send(data);
    }).catch(e=> {
        res.status(400).send(e);
    });
}



exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email, 'E-mail inválido');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres');

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create({
           name:req.body.name,
           email: req.body.email,
           password: md5(req.body.password + global.SALT_KEY),
           roles:["admin"]

        });
             res.status(201).send({
            message: 'Restaurante cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};






exports.authenticate = async(req, res, next) => {
    try {
        const restaurant = await repository.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        if (!restaurant) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            });
            return;
        }

        const token = await authService.generateToken({
            id: restaurant._id,
            email: restaurant.email,
            name: restaurant.name,
            roles: restaurant.roles
           
        });

        res.status(201).send({
            token: token,
            data: {
                email: restaurant.email,
                name: restaurant.name
            }
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


