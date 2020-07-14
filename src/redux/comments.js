import { COMMENTS } from "../Component/comments";
import * as ActionTypes from "./ActionType";

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      return state.concat(comment);

    default:
      return state;
  }
};
