import { configureStore } from "@reduxjs/toolkit";
import itemsStore from "./features/itemsStore.ts";
export const store = configureStore(
    {
        reducer: {
            items: itemsStore,
        }
    }
);
export type AppDispatch=typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>