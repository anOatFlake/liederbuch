import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const repertoireRouter = router({

  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),

  getRepertoire: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.repertoire.findUnique({
        where: {
          userId: input,
        }
    })
  }),
  

  isSongInRepertoire: protectedProcedure.input(z.string()).query(({ input, ctx }) => {
    return ctx.prisma.repertoire.findFirst({
      where: {
        songs: {
          contains: input
        }
      }
    }) ?? false;
  })
});