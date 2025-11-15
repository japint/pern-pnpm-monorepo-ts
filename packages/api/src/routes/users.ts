import { Router } from "express";

const router = Router();

const users: Record<string, { id: string; name: string; email: string }> = {
  "1": { id: "1", name: "John Doe", email: "john@example.com" },
};

router.get("/:id", (req, res) => {
  const user = users[req.params.id];
  if (!user) return res.status(404).json({ message: "Not found" });
  res.json(user);
});

export default router;
