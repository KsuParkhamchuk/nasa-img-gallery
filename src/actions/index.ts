import { IRootState } from "../reducers"

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



