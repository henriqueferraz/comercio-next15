import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"

import { defaultCategories, listCategories } from "@/services/category";
import { getAllProducts } from "@/services/product";

import { Category } from "@prisma/client"
import { Product } from "@prisma/client";




export const ProductsTab = async () => {

    const categorys: Category[] = await listCategories();
    const defaultValue = await defaultCategories();
    const products: Product[] = await getAllProducts();


    return (

        <Tabs defaultValue={defaultValue?.value || "sushi"}>
            <TabsList className="flex">

                {categorys.map(item => (
                    <TabsTrigger
                        key={item.id}
                        value={item.value}
                        className="flex-1"
                    >
                        {item.title}
                    </TabsTrigger>
                ))}

            </TabsList>

            {products.map(item => (
                <TabsContent
                    key={item.id}
                    value={item.category}
                    className="mt-6"
                >
                    {products.length > 0 &&
                        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            
                            {products.map(item => (
                                <div
                                    key={item.id}
                                    className="flex flex-col gap-2"
                                >
                                    <div className="rounded-md overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-32 object-cover"
                                        />
                                    </div>
                                    <div className="mt-3 flex flex-col gap-2">
                                        <p className="text-lg">{item.name}</p>
                                        <p className="text-sm opacity-50">R$ {item.price.toFixed(2)}</p>
                                        <button className="bg-primary text-white rounded-md px-3 py-2">Adicionar</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }

                </TabsContent>
            ))}

        </Tabs >


    )
}

