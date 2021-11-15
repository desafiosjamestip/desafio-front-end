/*
interface dos dados enviados para função que faz a requisição de cadastro de usuarios
*/
export interface UserRegisterData {
  name: string;
  email: string;
  password: string;
  id: number;
}
