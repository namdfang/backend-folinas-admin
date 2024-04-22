'use strict';

/**
 * about-growing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-growing.about-growing');
