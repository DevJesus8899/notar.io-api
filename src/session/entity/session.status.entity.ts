import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    OneToOne,
} from "typeorm";

import { SessionEntity } from "./session.entity";

@Entity({ name: "session_statuses" })
export class SessionStatusEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "name" })
    name: string;

    @Column({ name: "status" })
    status: boolean;

    @Column({ name: "notified", default: false })
    notified: boolean;

    @Column({ name: "sms_sid", nullable: true })
    smsSid: string;

    @Column({ name: "email_sid", nullable: true })
    emailSid: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    @OneToOne(() => SessionEntity, (session) => session.sessionType)
    session: SessionEntity
}