import { prisma } from "@/lib/prisma";

export const listCategories = async () => {

  return await prisma.category.findMany()

};


export const defaultCategories = async () => {

  return await prisma.category.findFirst();
};
