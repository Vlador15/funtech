import {
    Entity, PrimaryGeneratedColumn, Column, BaseEntity
} from "typeorm";

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") id!: string;

    @Column({ unique: true })
    username!: string;

    @Column({ nullable: true })
    passwordHash!: string;

    @Column({ nullable: true })
    telegramId!: string;

    @Column({ nullable: true })
    vkId!: string;

    @Column({ nullable: true })
    displayName!: string;
}
