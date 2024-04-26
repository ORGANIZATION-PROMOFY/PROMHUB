import { create } from "zustand";

const useProductStore = create((set) => ({
  products: {},

  increaseCount: (product, idProduct) =>
    set((state) => ({
      products: {
        ...state.products,
        [idProduct]: state.products[idProduct]
          ? {
              ...state.products[idProduct],
              count: state.products[idProduct].count + 1,
            }
          : { ...product, count: 1 },
      },
    })),
  decreaseCount: (idProduct) =>
    set((state) => ({
      products: {
        ...state.products,
        [idProduct]: state.products[idProduct]
          ? {
              ...state.products[idProduct],
              count: Math.max(0, state.products[idProduct].count - 1),
            }
          : undefined,
      },
    })),
}));
export { useProductStore };
