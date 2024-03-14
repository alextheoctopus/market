import React, { useEffect, useState } from "react"
import { ReduxFetch } from "../../store/features/itemsStore.ts";
import { ItemCard } from "../ItemBin/ItemCard/ItemCard.tsx";
import { Stack } from "@mui/material";
import { Props } from "../../App.tsx";
export type Item = {
    id: number
    title: string,
    thumbnail: string,
    quantity: number,
    price: number
  }
export const ItemBin = ({ dataRedux }: Props) => {
    const [data, setData] = useState(dataRedux.items);
    useEffect(() => {
        setData(dataRedux.items);
        console.log("itembin", data);
    }, [dataRedux]);
    return (
        <Stack direction="column">
            {data.loading ? <div>Loading...</div> :
                data.data.carts ?
                    data.data.carts.map((item: Item, index: number) => (
                        <ItemCard item={item} key={index}></ItemCard>
                    )) :
                    data.error ? <div>{data.error}</div> : ''}
        </Stack>)
}