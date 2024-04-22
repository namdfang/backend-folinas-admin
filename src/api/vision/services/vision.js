'use strict';

/**
 * vision service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vision.vision');
