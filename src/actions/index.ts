import { IRootState } from "../reducers"
import { User, UserRegistration } from "../interfaces";
import { ROLE } from "../constants";
const headerAuth = 'Basic aGVzZmludGVjaDo1ZThmMTAxOC1mNjVhLTRlMjAtYWU2OS0xZjE4MTJmNmY2Zjc=';
const baseUrl = 'http://localhost:3000/api/v1';

export const getSelectedDateImg = (selectedDate: string) => {
    return (dispatch: (action: any) => Promise<any>, getState: () => IRootState) => {
      return dispatch({
        type: 'GET_SELECTED_DATE_IMG',
        callAPI: 'https://api.nasa.gov/planetary/apod?api_key=s0Bgn85OLjsXTfgCmhRgAAiu5fjVJrh2KJ5lqeZ7&date='+ selectedDate
      })
    }
}

export const getImgs = (imgDate:string) => {
  return (dispatch: (action: any) => Promise<any>, getState: () => IRootState) => {
      return dispatch({
        type: 'GET_ALL_MONTH_IMG',
        callAPI: 'https://api.nasa.gov/planetary/apod?api_key=s0Bgn85OLjsXTfgCmhRgAAiu5fjVJrh2KJ5lqeZ7&date='+ imgDate,
      })
  }
}

export  const clearImgArray = () =>({
  type: 'CLEAR_ARRAY',
  payload: []
})

export const registerNewUser = (newUser: UserRegistration) => {
  return async (dispatch: any) => {
    const res = await fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...newUser,
        role: ROLE.User,
      }),
    });
    console.log(res);
    if (res.status === 201) {
      const response: User = await res.json();
      console.log(response);
    }
  }
}

const registerUser = (tokens: any) => ({
  type: 'REGISTER_USER',
  payload: tokens
})

export const loginUser = (user: any) => {
  return (dispatch: any) => {
    return fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("access_token", res.accessToken);
        localStorage.setItem("fullName", res.user.fullName);
        
        dispatch(registerUser(res));
      });
  }
}



