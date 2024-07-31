import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (name, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    axios
      .post(`http://localhost:5500/api/user/login`, { name, password })

      .then((response) => {
        const token = response.data.accessToken;
        // console.log(JSON.stringify(token));
        // const data = ;
        console.log(response.data);
        localStorage.setItem("token", token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
          accessToken: token,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorStatus = error.response ? error.response.status : 500;
        dispatch({
          type: LOGIN_FAILURE,
          error: { message: errorMessage, status: errorStatus },
        });
      });
  };
};

export const logOut = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };
};
