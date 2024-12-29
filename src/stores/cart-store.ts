import { Cart } from "@/types/carts";
import { Product } from "@/types/product";
import { create } from "zustand"

type States = {
    cart: Cart[];
}

type Actions = {
    upserCartItem: (product: Product, quantity: number) => void;
}

const initialStates: States = {
    cart: []
}

export const useCartStore = create<States & Actions>()(set => ({
    ...initialStates,
    upserCartItem: (product, quantity) => set(state => {
        let newCart = state.cart;

        return { ...state, cart: newCart }
    })
}))