import { z } from "zod";

export const IdSchema = z.string().min(1);

export const ApiErrorSchema = z.object({
    error: z.object({
        code: z.string(),
        message: z.string(),
    }),
});

export type ApiError = z.infer<typeof ApiErrorSchema>;
