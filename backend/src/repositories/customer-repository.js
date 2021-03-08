'use strict';
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();
}






exports.authenticate = async (data) => {
    const res = await Customer.findOne({
        email: data.email,
        password: data.password
    });
    return res;
};



exports.get = async () => {
    const res = await Product.find({
        name: true,
        email:true
    }, 'name email');
    return res;
};




