import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store"

export const GenerateMessage = () => {

    const { name, address } = useCheckoutStore(state => state);
    const { cart } = useCartStore(state => state);

    let OrderProducts = [];
    for (let item of cart) {
        OrderProducts.push(`${item.quantity} X ${item.product.name},`);
    }

    return `*** Dados dos cliente ***
Nome:${name},
Endereço:${address.street}, ${address.number} (${address.complement})
${address.district}, ${address.city}/${address.states}
-----------
*** Pedido ***
${OrderProducts.join("\n")}`;
}