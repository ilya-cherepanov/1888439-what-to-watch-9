import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../constants';
import {Comment} from '../../types/comment';
import {CommentsData} from '../../types/state';


const initialState: CommentsData = {
  comments: [],
  isCommentSending: false,
};


export const commentsData = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {
    loadComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },

    setIsCommentSending: (state, action: PayloadAction<boolean>) => {
      state.isCommentSending = action.payload;
    },
  },
});


export const {
  loadComments,
  setIsCommentSending,
} = commentsData.actions;
