'use strict';

/**
 * blog-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-collection.blog-collection');
