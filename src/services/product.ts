import { prisma } from "@/lib/prisma";
import { Product } from "@prisma/client";

export const getAllProducts = async (): Promise<Product[]> => {

    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(prisma.product.findMany());
        }, 500);
    });
    ;

};


export const listProducts = async (categories: string): Promise<Product[]> => {

    return await prisma.product.findMany({
        where: {
            category: categories
        }
    })

};