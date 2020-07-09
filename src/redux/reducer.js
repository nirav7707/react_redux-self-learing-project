import { DISHES } from "../Component/deshes";
import { COMMENTS } from "../Component/comments";
import { LEADERS } from "../Component/Leaders";
import { PROMOTIONS } from "../Component/promotion";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  leaders: LEADERS,
  promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
  return state;
};
