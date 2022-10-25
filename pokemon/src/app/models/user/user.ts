import { UserRole } from "./user-role";

export class User{
  id: number = 0;
  userame: string = '';
  email: string = '';
  password: string = '';
  role: UserRole = UserRole.Customer;
}
