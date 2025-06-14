import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  acidA: string;
  acidB: string;
  arrA: string[];
  arrB: string[];
  isLoading: boolean;
  isAcidALonger: boolean | null;
  error: string | null;
  validateValue: { acidA: string; acidB: string } | null;
}

const initialState: FormState = {
  acidA: "",
  acidB: "",
  arrA: [],
  arrB: [],
  isLoading: false,
  isAcidALonger: null,
  error: null,
  validateValue: null,
};

const checkLength = (state: FormState) => {
  const lengthA = state.acidA.length;
  const lengthB = state.acidB.length;

  if (lengthA > lengthB) {
    state.isAcidALonger = true;
  } else if (lengthA < lengthB) {
    state.isAcidALonger = false;
  } else {
    state.isAcidALonger = null;
  }

  if (lengthA !== lengthB) {
    state.error = "длины последовательностей неравны";
  } else {
    state.error = null;
  }
};

const counterSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setAcidA: (state, action: PayloadAction<string>) => {
      state.acidA = action.payload;
      state.arrA = action.payload.trim() ? action.payload.split("") : [];
      checkLength(state);
    },
    setAcidB: (state, action: PayloadAction<string>) => {
      state.acidB = action.payload;
      state.arrB = action.payload.trim() ? action.payload.split("") : [];
      checkLength(state);
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    resetForm(state) {
      state.acidA = "";
      state.acidB = "";
    },
  },
});

export const { setAcidA, setAcidB, setLoading, resetForm } =
  counterSlice.actions;
export default counterSlice.reducer;
