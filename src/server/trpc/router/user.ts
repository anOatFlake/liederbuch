import { router, protectedProcedure } from "../trpc";

export const userRouter = router({
  getUser: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findUnique({
      where: {
        id: ctx.session.user.id
      }
    })
  }),
});
