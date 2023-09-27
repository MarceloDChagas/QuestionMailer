import { Router, Request, Response } from "express";
import { createUserController } from "../app/use-cases/CreateUser/CreateUserConfig";
import { connectionToMongo } from "../config/database/database.mongo";
import dotenv from "dotenv";
import createQuestionController from "../app/use-cases/CreateQuestion/CreateQuestionConfig";
import { findQuestionController } from "../app/use-cases/FindQuestion/FindQuestionConfig";
import { findUserController } from "../app/use-cases/FindUser/FindUserConfig";
import { sendQuestionController } from "../app/use-cases/SendQuestion/SendQuestionConfig";
import { createUserValidator } from "../app/use-cases/CreateUser/CreateUserValidator";
import { createQuestionValidator } from "../app/use-cases/CreateQuestion/CreateQuestionValidator";
const router = Router();

dotenv.config();
const a = connectionToMongo();
console.log(a);
router.post(
  "/questions",
  createQuestionValidator,
  async (req: Request, res: Response) => {
    return createQuestionController.handleSaveQuestion(req, res);
  }
);

router.get("/users", (req: Request, res: Response) => {
  return res.json({ message: "DKDKK" });
});

router.post(
  "/users",
  createUserValidator,
  async (req: Request, res: Response) => {
    return createUserController.handleCreateUser(req, res);
  }
);

router.get("/questions", (req: Request, res: Response) => {
  return findQuestionController.handleFindQuestionByLevel(req, res);
});

router.get("/", (req: Request, res: Response) => {
  return findUserController.handleFindAllUsers(req, res);
});

router.get("/sendQuestionToUser", (req: Request, res: Response) => {
  return sendQuestionController.handleSendQuestion(req, res);
});

export default router;
