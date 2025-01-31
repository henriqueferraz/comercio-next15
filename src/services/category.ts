import { prisma } from "@/lib/prisma";

export const listCategories = async () => {

  return await prisma.category.findMany()

};

