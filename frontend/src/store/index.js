import { create } from "zustand";

const useStore = create((set) => ({
  cart: [],
  addBookToCart: (book) => set((state) => ({ cart: [...state.cart, book] })),
}));

export { useStore };
