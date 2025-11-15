import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import users from "./routes/users";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", users);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`API listening on http://localhost:${port}`)
);
