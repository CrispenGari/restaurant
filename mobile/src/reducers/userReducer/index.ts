import { SET_USER } from "../../constants";
import { User } from "../../graphql/generated/graphql";
import { ActionType } from "../../types";

export const userReducer = (
  state: User | null = null,
  { type, payload }: ActionType<User | null>
) => {
  switch (type) {
    case SET_USER:
      return (state = payload);
    default:
      return state;
  }
};
