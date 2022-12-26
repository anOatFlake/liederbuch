import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const repertoireRouter = router({
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
  }),

  addSongToRepertoire: protectedProcedure.input(z.string()).mutation(async ({ input, ctx }) => {
    const currentRep = await ctx.prisma.repertoire.findUnique({
      where: {
        userId: ctx.session.user.id,
      }
    })
    const result = await ctx.prisma.repertoire.update({
      where: {
        userId: ctx.session.user.id,
      },
      data: {
        songs: input + ', ' + currentRep?.songs
      }
    })
    return { added: result }
  }),
  removeSongFromRepertoire: protectedProcedure.input(z.string()).mutation(async ({ input, ctx }) => {
    const currentRep = await ctx.prisma.repertoire.findUnique({
      where: {
        userId: ctx.session.user.id,
      }
    })
    const updatedSongs = currentRep?.songs?.replace(input + ', ', '')
    ctx.prisma.repertoire.update({
      where: {
        userId: ctx.session.user.id,
      },
      data: {
        songs: updatedSongs
      }
    })
  })
});