import { Request, Response } from "express"
import { RepairsService } from "../services/repairs.service"


export class RepairsController {
  constructor( private readonly reapairsService: RepairsService){

  }
  createRepair = (req: Request, res: Response) => {
    const { date, userId } = req.body;

    this.reapairsService.createRepair({ date, userId })
      .then((repair) => {
        res.status(201).json(repair)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  }

  findAllRepairs = (req: Request, res: Response) => {
    res.status(200).json({ message: 'ok' })
  }
  findOneRepair = (req: Request, res: Response) => {

  }
  updateRepair = (req: Request, res: Response) => {

  }
  deleteRepair = (req: Request, res: Response) => {

  }
}