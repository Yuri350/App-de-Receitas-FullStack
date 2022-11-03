const models = require('../database/models');

const { Product } = models;

const getAll = async () => Product.findAll();

module.exports = { getAll };
