import { createStore } from "redux";
// بإمكاننا استخدام createReducer بدلاً من createSlice ولكن الاقوى createSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // ملاححظة مهمة: هنا بما اننا نستخدم createSlice والتي هي ضمن Redux toolkit, ليس علينا عند تعديل قيمة الحالة ان ننشاء كائن جديد ونعدل كما كنا نفعل في redux العادية
      // في redux toolkit التعديل يكون بهذه الطريقة
      // redux toolkit هو يقوم ببعض الوظائف التي كنا نفعلها في redux العادية مثل انشاء كائن جديد ونسخ الحالة فيه
      // ايضاً مايحتاج نعدل على جميع قيم الحالات التي لا نحتاج تغيير قيمتها .. وهذا عكس ماكنا نفعل في redux العادية بحيث كنا نعدل جميع قيم الحالات التي عندنا حتى لو ماراح تملك قيمة جديدة
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  // ملاحظة مهمة: عندما نرجع شيء من الدالة يجب ان نرجع قيم لجميع الحالات سواء قيمته القديمة او قيمة جديدة .. نفس الفكرة التي كنا نتعامل معاها في useState()
  if (action.type === "increment") {
    // لاحظ ان طريقة التعديل تكون بإرجاع قيمة جديدة للحالة وليس التعديل على الحالة بشكل مباشر لأن يعتبر خطأ, وهذا مثال على الخطأ اذا سوينا كذا بس : state.counter + 1
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

// لا يوجد أكثر من Store واحد
const store = createStore(counterReducer);

export default store;
