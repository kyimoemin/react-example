import { apis } from "../../api";
import { setUser, setUserError, setUserLoading } from "../slices/user";

export const getUser = () => async (dispatch, getState) => {
  try {
    dispatch(setUserLoading());
    const user = await apis.user.getOne();
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setUserError(error.message));
  }
};
