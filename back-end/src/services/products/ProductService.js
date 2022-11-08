const models = require('../../database/models');

const { products } = models;

const getAll = async () => products.findAll();

module.exports = { getAll };
