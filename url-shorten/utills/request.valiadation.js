import { z } from "zod";

export const signupPostrequestBodySchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().optional(),
  email: z.email("Invalid email"),
  password: z.string().min(3, "Password must be at least 3 characters"),
});

export const loginPostrequestBodySchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(3, "Password must be at least 3 characters"),
});

export const shortUrlPostrequestBodySchema = z.object({
  user_id: z.string("UserId is required"),
  target_url: z.string("target url required"),
});
