import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"
import { Product } from "@/types/product";
import { ProductEmpty } from "@/components/products/empty";
import { ProductItem } from "@/components/products/item";
import { listCategories } from "@/services/category";

type Tab = {
    title: string;
    value: string;
    products: Product[];
}

export const ProductsTab = async () => {

    const categorys = await listCategories()

    return (
        <Tabs defaultValue="sushi">
            <TabsList className="flex">
                {categorys.map(item => (
                    <TabsTrigger
                        key={item.id}
                        value={item.title}
                        className="flex-1"
                    >
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {categorys.map(item => (
                <TabsContent key={item.id} value={item.title} className="mt-6">
                    <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                        ...
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    )
}