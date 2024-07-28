import { injectable } from 'tsyringe';

@injectable()
class LogoutService {
  async logout(data: any) {
    const { token } = data;

    // Preciso desenvolver uma lógica para invalidar o token (pode ser armazenado em uma blacklist)
    console.log(`Invalidating token ${token}`);
  }
}

export default LogoutService;
