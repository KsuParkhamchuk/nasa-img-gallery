import { START, SUCCESS, ERROR } from "../constants"


interface IImgState {
  selectedImgObj: Object,
  imgObjects: Array<Object>
}

const defaultState = {
  selectedImgObj: {},
  imgObjects: []
} as IImgState

function imgReducer(state: IImgState = defaultState, action: any) {
 
  const { type, payload, response } = action
  if (response !== undefined) {
    localStorage.setItem("latestSelectedDate", response.date);
  }

  switch (type) {
    case 'GET_SELECTED_DATE_IMG' + START:

      return {
        ...state,
        load: true,
        ...payload
      }

    case 'GET_SELECTED_DATE_IMG' + SUCCESS:

      return {
        ...state,
        selectedImgObj: response,
      }
    case 'GET_SELECTED_DATE_IMG' + ERROR:

      return {
        ...state,
        ...payload,
        error: true
      }

    case 'GET_ALL_MONTH_IMG' + SUCCESS:
      return {
        ...state,
        imgObjects: [...state.imgObjects, response]
      }

    case 'CLEAR_ARRAY':
      return {
        ...state,
        imgObjects: [],
      }
  }
  return state
}

export default imgReducer
