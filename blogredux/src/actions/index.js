import jsonPlaceHolder from "../apis/jsonPlaceHolder";
//Updating to check git
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
