import React, { useEffect, useState } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { ReduxFetch } from "../../store/features/itemsStore"

type Props = {
    dataRedux: ReduxFetch
}
export const FinalSum = ({ dataRedux }: Props) => {
    const [sum, setSum] = useState(0);
    useEffect(() => {
        setSum(dataRedux.items.sumPrice);
    }, [dataRedux])
    return (
        <Box margin="auto">
            {(dataRedux.items.error || dataRedux.items.loading )? '' :
                (<Stack direction="row" >
                    <Typography fontSize={40} margin={3}>Итого:</Typography>
                    <Typography fontSize={40} margin={3}>{sum}</Typography>
                    <Typography fontSize={40} marginTop={3}>руб.</Typography>
                </Stack>)
            }
        </Box>)
}