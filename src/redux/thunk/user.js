import { apis } from "../../api";
import { setUser, setUserError, setUserLoading } from "../slices/user";

export const getUser = () => async (dispatch, getState) => {
  try {
    dispatch(setUserLoading());
    const user = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    ).then((response) => response.json());

    dispatch(setUser(user));
  } catch (error) {
    dispatch(setUserError(error.message));
  }
};
