import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  acidA: string;
  acidB: string;
  arrA: string[];
  arrB: string[];
  isLoading: boolean;
  error: string | null;
  validateValue: { acidA: string; acidB: string } | null;
}

const initialState: FormState = {
  acidA: "",
  acidB: "",
  arrA: [],
  arrB: [],
  isLoading: false,
  error: null,
  validateValue: null,
};

const checkLength = (state: FormState) => {
  const lengthA = state.acidA.length;
  const lengthB = state.acidB.length;

  if (lengthA !== lengthB) {
    state.error = "Длины последовательностей неравны";
    state.validateValue = null;
  } else {
    state.error = null;
    state.validateValue = { acidA: state.acidA, acidB: state.acidB };
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
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    resetForm(state) {
      state.acidA = "";
      state.acidB = "";
      state.error = null;
    },
  },
});

export const { setAcidA, setAcidB, setLoading, setError, resetForm } =
  counterSlice.actions;
export default counterSlice.reducer;
