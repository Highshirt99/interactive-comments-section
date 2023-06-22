import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const initialState = {
  userData: data,
  userComments: [],
  replyId: null,
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
      state.commentToBeEdited = state.userComments.filter(
        (item) => item.id === action.payload
      )[0];
    },

    editComment: (state, action) => {
      state.userComments.forEach((comment) => {
        if (comment.id === action.payload.commentId) {
          comment.content = action.payload.commentContent;
        }
      });
    },
    upVoteComment: (state, action) => {
      state.userComments.forEach((comment) => {
        if (comment.id === action.payload) {
          comment.score += 1;
        }
      });
    },

    downVoteComment: (state, action) => {
      state.userComments.forEach((comment) => {
        if (comment.id === action.payload && comment.score > 0) {
          comment.score -= 1;
        }
      });
    },

    upVoteOtherComment: (state, action) => {
      state.userData.comments.forEach((comment) => {
        if (comment.id === action.payload) {
          comment.score += 1;
        }
      });
    },
    downVoteOtherComment: (state, action) => {
      state.userData.comments.forEach((comment) => {
        if (comment.id === action.payload && comment.score > 0) {
          comment.score -= 1;
        }
      });
    },
    upVoteReply: (state, action) => {
      state.userData.comments.forEach((comment) => {
        comment.replies.forEach((reply) => {
          if (reply.id === action.payload) {
            reply.score += 1;
          }
        });
      });
    },

    downVoteReply: (state, action) => {
      state.userData.comments.forEach((comment) => {
        comment.replies.forEach((reply) => {
          if (reply.id === action.payload && reply.score > 0) {
            reply.score -= 1;
          }
        });
      });
    },

    addReply: (state, action) => {
      const score = Math.round(Math.random() * 20);
      const id = Math.random() * 10000000;
      const content = action.payload.content;
      const createdAt = action.payload.createdAt;
      let replyingTo;

      const user = {
        username: state.userData.currentUser.username,
        image: {
          png: state.userData.currentUser.image.png,
          webp: state.userData.currentUser.image.webp,
        },
      };
      state.userData.comments.forEach((comment) => {
        if (
          comment.id === action.payload.commentId &&
          !action.payload.replyId
        ) {
          comment.replies.forEach((item) => {
            replyingTo = comment.user.username;
          });

          comment.replies.push({
            id,
            content,
            score,
            user,
            replyingTo,
            createdAt,
            currentUser: true,
            replies: [],
          });
        } else if (action.payload.replyId) {
          comment.replies.forEach((item) => {
            replyingTo = item.user.username;
            // state.replyId = item.id;
            item.replies2.push({
              id,
              content,
              score,
              user,
              replyingTo,
              createdAt,
              currentUser: true,
              replies: [],
            });
       
          });
        }
      });
    },

    editReply(state, action) {
      state.userData.comments.forEach((comment) => {
        if (comment.id === action.payload.commentId) {
          comment.replies.forEach((reply) => {
            if (reply.id === action.payload.replyId) {
              reply.content = action.payload.content;
            }
          });
        }
      });
    },

    // replyReply(state, action) {
    //   const score = Math.round(Math.random() * 20);
    //   const id = Math.random() * 10000000;
    //   const content = action.payload.content;
    //   const createdAt = action.payload.createdAt;
    //   let replyingTo;

    //   const user = {
    //     username: state.userData.currentUser.username,
    //     image: {
    //       png: state.userData.currentUser.image.png,
    //       webp: state.userData.currentUser.image.webp,
    //     },
    //   };
    //   state.userData.comments.forEach((comment) => {
    //     if (comment.id === action.payload.commentId) {
    //       comment.replies.forEach((item) => {
    //         replyingTo = item.replyingTo;
    //       });

    //       comment.replies.replies.push({
    //         id,
    //         content,
    //         score,
    //         user,
    //         replyingTo,
    //         createdAt,
    //         currentUser: true,
    //       });
    //     }
    //   });
    // },
  },
});

export const {
  addComment,
  deleteCommment,
  editComment,
  setCommentToBeEdited,
  setEditedComment,
  clearEditedComment,
  upVoteComment,
  downVoteComment,
  upVoteOtherComment,
  downVoteOtherComment,
  upVoteReply,
  downVoteReply,
  addReply,
  editReply,
  replyReply,
} = userSlice.actions;

export default userSlice.reducer;
