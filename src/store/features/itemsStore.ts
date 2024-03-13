import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchItems = createAsyncThunk('fetchItems', async () => {
    const response = await fetch("https://dummyjson.com/carts/1");
    return response.json();
});

export type ReduxFetch = {
    items: {
        data: {
            carts: [{
                index: 0,
                title: '',
                thumbnail: '',
                quantity: 1,
                price: 0
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
            id: 0,
            data: {
                carts: [{
                    index: 0,
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
            increaseNumber: (state) => {
                state.id+=5;
            },
            decreaseNumber: (state) => {
            },
            deleteItem: (state) => {
                state.data.carts.splice(state.id, 1);
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
export default itemsStore.reducer;