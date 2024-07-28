import { injectable } from 'tsyringe';
import bcrypt from 'bcryptjs';

@injectable()
class HashService {
  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}

export default HashService;
