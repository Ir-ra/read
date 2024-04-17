"use client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./store";

type Props = {
  children: React.ReactNode;
};

export default function ReduxProvider({ children }: Props) {
  console.log('persistor', persistor);
  console.log('store', store);

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
}
