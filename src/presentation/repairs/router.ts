import { Router } from "express";
import { RepairsController } from "./controller";
import { RepairsService } from "../services/repairs.service";

export class RepairsRoutes {
  static get routes(): Router {
    const router = Router();

    const reapirService = new RepairsService();
    const controller = new RepairsController(reapirService);

    router.get("/", controller.findAllRepairs)
    router.post("/", controller.createRepair)
    router.get("/:id", controller.findOneRepair)
    router.patch("/:id", controller.updateRepair)
    router.delete("/:id", controller.deleteRepair)

    return router;
  }
}