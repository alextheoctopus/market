import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchItems = createAsyncThunk('fetchItems', async () => {
    const response = await fetch("https://dummyjson.com/carts/1");
    return response.json();
});

export type ReduxFetch = {
    items: {
        sumPrice:number,
        data: {
            carts: [{
                id: number,
                title: string,
                thumbnail: string,
                quantity: number,
                price: number
            }]
        },
        loading: boolean;
        error: string;
    }
}
export const itemsStore = createSlice(
    {
        name: "items",
        initialState: {
            sumPrice: 0,
            data: {
                carts: [{
                    id: 0,
                    title: '',
                    thumbnail: '',
                    quantity: 1,
                    price: 0
                }]
            },
            loading: false,
            error: '',
        },
        reducers: {
            increaseNumber: (state, action) => {
                let index = state.data.carts.findIndex(el => el.id === action.payload);
                if (state.data.carts[index].quantity >= 10) {
                    state.data.carts[index].quantity = 10;
                } else {
                    state.data.carts[index].quantity++;
                }
            },
            decreaseNumber: (state, action) => {
                let index = state.data.carts.findIndex(el => el.id === action.payload);
                if (state.data.carts[index].quantity <= 1) {
                    state.data.carts[index].quantity = 1;
                } else {
                    state.data.carts[index].quantity--;
                }

            },
            deleteItem: (state, action) => {
                let index = state.data.carts.findIndex(el => el.id === action.payload);
                state.data.carts.splice(index, 1);
            },
            sumBinItems: (state) => {
                let sum = 0;
                state.data.carts.forEach((item) => {
                    sum += item.price*item.quantity;
                });
                state.sumPrice = sum;
            }
        },
        extraReducers(builder) {
            builder
                .addCase(fetchItems.pending, (state) => {
                    state.loading = true;
                })
                .addCase(fetchItems.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data.carts = action.payload.products;

                })
                .addCase(fetchItems.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message ? "Failed to fetch data" : '';
                });
        },
    });
export const { increaseNumber, decreaseNumber, deleteItem, sumBinItems } = itemsStore.actions;
export default itemsStore.reducer;