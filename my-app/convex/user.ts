import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: { name: v.string(), password: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert("users", { name: args.name, password: args.password });
  },
});

export const get = query({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("name"), args.name))
      .first();
  },
});