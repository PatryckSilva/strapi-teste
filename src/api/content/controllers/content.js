"use strict";

/**
 * content controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::content.content", ({ strapi }) => ({
  // Method 3: Replacing a core action
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.db.query("api::content.content").findOne({
      where: { slug: id },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
