import { router } from "../trpc";
import { authRouter } from "./auth";
import { repertoireRouter } from "./repertoire";
import { userRouter } from "./user";

export const appRouter = router({
  auth: authRouter,
  repertoire: repertoireRouter,
  users: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
