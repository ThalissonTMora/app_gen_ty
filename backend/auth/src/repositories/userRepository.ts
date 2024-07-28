import { Repository } from 'typeorm';
import User, { UserStatus } from '../models/User';
import { AppDataSource } from '../config/database';

class UserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(User);
  }

  public async create(userData: Partial<User>): Promise<User> {
    const user = this.ormRepository.create({
      login: userData.login!,
      email: userData.email!,
      password: userData.password!,
      ip: userData.ip!,
      emailVerifiedAt: userData.emailVerifiedAt ?? null,
      isActive: userData.isActive ?? true,
      lastLoginAt: userData.lastLoginAt ?? null,
      rememberToken: userData.rememberToken ?? null,
      deleted: userData.deleted ?? UserStatus.ACTIVE,
      createdAt: new Date(),
    });
    return this.ormRepository.save(user);
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.ormRepository.findOne({ where: { email } });
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UserRepository;
