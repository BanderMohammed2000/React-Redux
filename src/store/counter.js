// بإمكاننا استخدام createReducer بدلاً من createSlice ولكن الاقوى createSlice
import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// createSlice: هي دالة ضمن حزمة redux toolkit
// تجمع state + reducers + actions في مكان واحد
const counterSlice = createSlice({
  // اسم slice
  name: "counter",
  // Initial state
  initialState: initialCounterState,
  // Reducers
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
      // payload: اسم محجوز وليس اختياري
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// من اجل استخدام actions في المكونات
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
