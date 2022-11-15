import { SET_USER } from "../../constants";
import { User } from "../../graphql/generated/graphql";
import { ActionTye } from "../../types";

export const userReducer = (
  state: User | null = null,
  { payload, type }: ActionTye<User>
) => {
  switch (type) {
    case SET_USER:
      return (state = payload);
    default:
      return state;
  }
};
