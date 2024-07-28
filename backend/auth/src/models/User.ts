import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Unique } from 'typeorm';

export enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    DELETED = 'deleted'
}

@Entity()
@Unique(['email'])
class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    login: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    ip: string;

    @Column({ type: 'timestamp', nullable: true })
    emailVerifiedAt: Date | null;

    @Column({ default: true })
    isActive: boolean;

    @Column({ type: 'timestamp', nullable: true })
    lastLoginAt: Date | null;

    @Column({ type: 'text', nullable: true })
    rememberToken: string | null;

    @CreateDateColumn()
    createdAt: Date;

    @Column({
        type: 'enum',
        enum: UserStatus,
        default: UserStatus.ACTIVE
    })
    deleted: UserStatus;

    @Column({ type: 'text', nullable: true })
    resetPasswordToken: string | null;

    @Column({ type: 'timestamp', nullable: true })
    resetPasswordExpires: Date | null;

    constructor(
        login: string,
        email: string,
        password: string,
        ip: string,
        emailVerifiedAt: Date | null = null,
        isActive: boolean = true,
        lastLoginAt: Date | null = null,
        rememberToken: string | null = null,
        deleted: UserStatus = UserStatus.ACTIVE,
        createdAt: Date = new Date(),
        resetPasswordToken: string | null = null,
        resetPasswordExpires: Date | null = null
    ) {
        this.login = login;
        this.email = email;
        this.password = password;
        this.ip = ip;
        this.emailVerifiedAt = emailVerifiedAt;
        this.isActive = isActive;
        this.lastLoginAt = lastLoginAt;
        this.rememberToken = rememberToken;
        this.deleted = deleted;
        this.createdAt = createdAt;
        this.resetPasswordToken = resetPasswordToken;
        this.resetPasswordExpires = resetPasswordExpires;
    }
}

export default User;
