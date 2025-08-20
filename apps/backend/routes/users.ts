import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json([{ id: 1, name: "Alice" }]);
});

export default router;
