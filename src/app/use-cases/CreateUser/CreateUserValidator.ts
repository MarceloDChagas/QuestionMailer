import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const ObjectIdSchema = z.string();

const UserSchema = z.object({
  _id: ObjectIdSchema.optional(),
  name: z.string(),
  college: z.string().regex(/^[A-Za-z]+$/),
  email: z.string().email(),
});

type UserSchema = z.infer<typeof UserSchema>;

export function createUserValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = UserSchema.safeParse(req.body) as { error?: z.ZodError };
  if (error) {
    const errorMessage = error.issues.map((issue) => issue.message);
    return res.status(400).json({ message: errorMessage });
  }
  next();
}
