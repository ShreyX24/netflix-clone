import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface ModalState {
    isModalOpen: boolean;
    selectedMovieId: string | null;
}

// Initial state
const initialState: ModalState = {
    isModalOpen: false,
    selectedMovieId: null
};

// Create the modal slice
export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<string>) => {
            state.isModalOpen = true;
            state.selectedMovieId = action.payload;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
            state.selectedMovieId = null;
        }
    }
});

// Export actions and reducer
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;