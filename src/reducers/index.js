import allOrderSlice from "@/Slices/allOrderSlice";
import authSlice from "@/Slices/authSlice";
import bannerSlice from "@/Slices/bannerSlice";
import controllerSlice from "@/Slices/controllerSlice";
import conversationSlice from "@/Slices/conversationSlice";
import customerSupportSlice from "@/Slices/customerSupportSlice";
import loginRegisterSlice from "@/Slices/loginRegisterSlice";
import orderRefoundsSlice from "@/Slices/orderRefoundsSlice";
import storeSlice from "@/Slices/storeSlice";
import viewProductSlice from "@/Slices/viewProductSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  authSlice: authSlice,
  controllerSlice: controllerSlice,
  bannerSlice: bannerSlice,
  customerSupportSlice: customerSupportSlice,
  viewProductSlice: viewProductSlice,
  orderRefoundsSlice: orderRefoundsSlice,
  loginRegisterSlice: loginRegisterSlice,
  storeSlice: storeSlice,
  conversationSlice: conversationSlice,
  allOrderSlice: allOrderSlice,
});

export default rootReducer;
