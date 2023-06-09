import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunk } from '../redux/thunk';

export function Example13() {

  const { data, loading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunk.user.getUser());
  }, []);

  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>{error}</h1>;

  return <h1>
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  </h1>;
}