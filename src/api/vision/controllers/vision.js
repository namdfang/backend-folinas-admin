'use strict';

/**
 * vision controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::vision.vision');
