import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialState = {
  isMobile: boolean;
  isLoading: boolean

   
};

const initialState: InitialState = {
  isMobile: false,
  isLoading: true,


};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      
      state.isLoading = action.payload;
    },
   
  
  },
});

export const { setMobile,setIsLoading} = appSlice.actions;
export default appSlice.reducer;