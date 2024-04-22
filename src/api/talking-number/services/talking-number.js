'use strict';

/**
 * talking-number service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::talking-number.talking-number');
