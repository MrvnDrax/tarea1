import { User } from "../../data"

enum UserRole {
  EMPLOYEE = 'EMPLOYEE',
  CLIENT = 'CLIENT',
}

enum UserStatus {
  ACTIVE ='ACTIVE',
  DISABLED ='DISABLED',
}

export class UserService {
  constructor() {

  }
  async createUser(userData: any){
    const user = new User
      user.name = userData.name.toLowerCase().trim();
          
      user.email = userData.email.toLowerCase().trim();
    
      user.password = userData.password.trim()
          
      user.rol = UserRole.CLIENT
          
    try {
      return await user.save()
    } catch (error) {
      console.log(error)
    }
  }
}