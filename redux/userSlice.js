import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const initialState = {
  userData: data,
  userComments: data.currentUser.comments,
  commentToBeEdited: [],
  editedComment: null
};

export const userSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.userComments.push(action.payload);
    },

    deleteCommment: (state, action) => {
      state.userComments = state.userComments.filter(
        (item) => item.id !== action.payload
      );
    },

    setCommentToBeEdited: (state, action) => {
      const userComment =  state.userComments.filter((item) => item.id === action.payload)
      state.commentToBeEdited = userComment
    },

    setEditedComment: (state, action) => {
    state.editedComment = action.payload
    }
  },
});

export const { addComment, deleteCommment, setCommentToBeEdited, setEditedComment } = userSlice.actions;

export default userSlice.reducer;
