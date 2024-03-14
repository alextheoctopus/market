import React, { useEffect, useState } from "react"
import { ItemCard } from "./ItemCard/ItemCard.tsx";
import { Stack } from "@mui/material";
import { Props } from "../../App.tsx";
export type Item = {
    id: number
    title: string,
    thumbnail: string,
    quantity: number,
    price: number
}
export const ItemCart = ({ dataRedux }: Props) => {
    const [data, setData] = useState(dataRedux.items);
    useEffect(() => {
        setData(dataRedux.items);
    }, [dataRedux]);
    return (
        <Stack direction="column">
            {data.loading ? <div>Loading...</div> :
                data.data.carts ?
                    data.error ? <div>{data.error}</div> :
                        data.data.carts.map((item: Item, index: number) => (
                            <ItemCard item={item} key={index}></ItemCard>
                        )) :''}
        </Stack>)
}