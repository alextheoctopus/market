import React from "react";
import "./style.css";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { decreaseNumber, deleteItem, increaseNumber, sumBinItems } from "../../../store/features/itemsStore.ts";
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import { Item } from "../ItemBin.tsx";

let cardStyle = {
    backgroundColor: "azure",
    padding: "20px",
    border: "1px solid gainsboro",
    borderRadius: "10px",
    marginBottom: "15px",
    columnGap: "24px",
    alignItems: "center",
}
let imgStyle = {
    border: "3px solid white",
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
            <Grid container>
                <Grid item xs={2} >
                    <Box
                        component="img"
                        sx={imgStyle}
                        alt="The house from the offer."
                        src={item.thumbnail}
                    />
                </Grid>
                <Grid item xs={10} padding={"20px"} marginBottom={"25px"}>
                    <Typography fontSize={25} fontWeight={5} >
                        {item.title}
                    </Typography>
                    <Stack direction="row" >
                        <Typography fontSize={20} fontWeight={10} margin={1}>
                            Количество
                        </Typography>
                        <Button onClick={increaseHandler}>+</Button>
                        <Typography fontSize={20} fontWeight={5} margin={1}>
                            {item.quantity}
                        </Typography>
                        <Button onClick={decreaseHandler}>-</Button>
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
                </Grid>
            </Grid>
        </Box >
    );
}


