import { router, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  //TODO: remove example method
  getSecretMessage: protectedProcedure.query(() => {
    return "You are logged in and can see this secret message!";
  }),
  //TODO: has song in reportoire (how to do it with multiple reps)
  isSongInRepertoire: protectedProcedure.query(({ ctx }) => {
    return ctx.session.user ?? true; //TODO: query to fetc all songs in rep
  }),
});
