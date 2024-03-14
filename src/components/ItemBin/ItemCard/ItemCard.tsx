import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { decreaseNumber, deleteItem, increaseNumber, sumBinItems } from "../../../store/features/itemsStore.ts";
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import { Item } from "../ItemBin.tsx";

let cardStyle = {
    backgroundColor: "azure",
    border: "1px solid gainsboro",
    borderRadius: "10px",
    marginBottom: "15px",
    columnGap: "24px",
    alignItems: "center",
}
let imgStyle = {
    borderRadius: "50%",
    height: "190px",
    padding: 5,
    alignItems: "center"
}
type Props = {
    item: Item
}
export const ItemCard = ({ item }: Props) => {
    const dispatch: any = useDispatch();

    const increaseHandler = () => {
        dispatch(increaseNumber(item.id));
    }
    const decreaseHandler = () => {
        dispatch(decreaseNumber(item.id));
    }
    const deleteHandler = () => {
        dispatch(deleteItem(item.id))
    }
    dispatch(sumBinItems());
    return (
        <Box sx={cardStyle}>
            <Stack direction="row" >
                <Box
                    component="img"
                    sx={imgStyle}
                    src={item.thumbnail}
                />
                <Stack direction="column" sx={{ marginTop: "auto", marginBottom: "auto" }}>
                    <Typography fontSize={25} fontWeight={5} >
                        {item.title}
                    </Typography>
                    <Stack direction="row" >
                        <Typography fontSize={20} fontWeight={10} margin={1}>
                            Количество
                        </Typography>
                        <Button onClick={decreaseHandler}>-</Button>
                        <Typography fontSize={20} fontWeight={5} margin={1}>
                            {item.quantity}
                        </Typography>
                        <Button onClick={increaseHandler}>+</Button>
                    </Stack>
                    <Stack direction="row" >
                        <Typography fontSize={20} fontWeight={10} margin={1}>
                            Цена:
                        </Typography>
                        <Typography fontSize={20} fontWeight={5} margin={1}>
                            {item.price}
                        </Typography>
                        <Typography fontSize={20} fontWeight={10} margin={1}>
                            руб.
                        </Typography>
                    </Stack>
                    <Stack direction="row" >
                        <Typography fontSize={20} fontWeight={10} margin={1}>
                            Удалить из корзины
                        </Typography>
                        <Button onClick={deleteHandler}>
                            <DeleteOutlined />
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Box >
    );
}


