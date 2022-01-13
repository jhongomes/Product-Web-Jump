import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Product } from "../../../../product/infra/typeorm/entities/Product";

@Entity("category")
class Category {
    @PrimaryColumn()
    id: string;

    @Column()
    code: number;

    @Column()
    name: string;

    @OneToMany(() => Product, product => product.category)
    productId: Product[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
export { Category } 