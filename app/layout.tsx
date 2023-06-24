"use client"

import React from "react";

import "./globals.css";
import { Provider } from "react-redux";
import {persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import store from "@data/store";


export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading = {"Loading"} persistor = {persistor}>{children}</PersistGate>
        </Provider>
      </body>
    </html>
  );
}
