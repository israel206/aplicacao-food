'use strict';
const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');

exports.create = async(data) => {
    var restaurant = new Restaurant(data);
    await restaurant.save();
}


exports.authenticate = async (data) => {
    const res = await Restaurant.findOne({
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




