import { z } from "zod";
import { NextFunction, Request, Response } from "express";

const ObjectIdSchema = z.string();

const QuestionSchema = z.object({
  _id: ObjectIdSchema.optional(),
  body: z.string(),
  schoolSubject: z.string(),
  level: z.string(),
  title: z.string(),
});

type QuestionSchema = z.infer<typeof QuestionSchema>;

export function createQuestionValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = QuestionSchema.safeParse(req.body) as {
    error?: z.ZodError;
  };
  if (error) {
    const errorMessage = error.issues.map((issue) => issue.message);
    return res.status(400).json({ message: errorMessage });
  }
  next();
}
