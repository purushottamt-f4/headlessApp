import { z } from "zod";

export const jwtPayload = z.object({
    id: z.string('value must be string')
});
