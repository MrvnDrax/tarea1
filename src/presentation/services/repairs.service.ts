import { Repairs, User } from "../../data"


enum RepairsStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export class RepairsService {
  constructor() {

  }
  async createRepair(repairData: any){
    const repair = new Repairs()
      repair.date = repairData.date;
      repair.status = RepairsStatus.PENDING;
      repair.user_id = repairData.userId
          
    try {
      return await repair.save()
    } catch (error) {
      console.log(error)
    }
  }
}