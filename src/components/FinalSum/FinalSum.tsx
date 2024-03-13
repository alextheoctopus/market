import React from "react"
import { ReduxFetch } from "../../store/features/itemsStore"
import { Box, Typography } from "@mui/material"
type Props = {
    dataRedux: ReduxFetch
}
export const FinalSum = ({ dataRedux }: Props) => {
    return (
        <Box>
            <Typography fontWeight={1}></Typography>
        </Box>)
}