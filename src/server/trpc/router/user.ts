import { router, protectedProcedure } from "../trpc";

export const userRouter = router({
  getUser: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
    });
  }),
  getRepertoire: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.repertoire.findUnique({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
  getSongs: protectedProcedure.query(async ({ ctx }) => {
    const repertoire = await ctx.prisma.repertoire.findUnique({
      where: {
        userId: ctx.session.user.id,
      },
    });
    return repertoire?.songs;
  }),
});
