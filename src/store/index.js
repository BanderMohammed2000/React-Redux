// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// لا يوجد أكثر من Store واحد
const store = configureStore({
  // معلومة مهمة: جميع هذه reducers سيتم دمجهم الى reducer واحد رئيسي
  reducer: { counter: counterReducer, auth: authReducer },
});

// الطريقة العادية Redux
// const counterReducer = (state = initialState, action) => {
//   // ملاحظة مهمة: عندما نرجع شيء من الدالة يجب ان نرجع قيم لجميع الحالات سواء قيمته القديمة او قيمة جديدة .. نفس الفكرة التي كنا نتعامل معاها في useState()
//   if (action.type === "increment") {
//     // لاحظ ان طريقة التعديل تكون بإرجاع قيمة جديدة للحالة وليس التعديل على الحالة بشكل مباشر لأن يعتبر خطأ, وهذا مثال على الخطأ اذا سوينا كذا بس : state.counter + 1
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// // لا يوجد أكثر من Store واحد
// const store = createStore(counterReducer);

export default store;
