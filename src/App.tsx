import { Grid } from "@mui/material";
import { useEffect } from "react";
import React from "react";
import { ItemBin } from "./components/ItemBin/ItemBin.tsx";
import { FinalSum } from "./components/FinalSum/FinalSum.tsx";
import { AppDispatch, store } from "./store/store.ts"
import { Provider, useDispatch, useSelector } from "react-redux";
import { ReduxFetch, fetchItems } from "./store/features/itemsStore.ts";
export type Item = {
  id: number
  title: string,
  thumbnail: string,
  quantity: number,
  price: number
}
export type Props = {
  dataRedux: ReduxFetch;
}

const AppRedux = () => {
  const dispatch: AppDispatch = useDispatch();
  const getCarts = async () => {
    await dispatch(fetchItems());
  }
  getCarts();
  return (
    <MainApp></MainApp>
  )
}
const MainApp = () => {
  const dataRedux = useSelector((state: ReduxFetch) => state);
  console.log("dataRedux", dataRedux);

  return (
    <Grid container>
      <Grid item xs={9}>
        <ItemBin dataRedux={dataRedux}></ItemBin>
      </Grid>
      <Grid item xs={3}>
        <FinalSum dataRedux={dataRedux}></FinalSum>
      </Grid>
    </Grid>);
}

export const App = () => {
  return (
    <Provider store={store}>
      <AppRedux></AppRedux>
    </Provider>
  );
}

