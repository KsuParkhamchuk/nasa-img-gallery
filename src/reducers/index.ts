import images from './images'

import { combineReducers } from 'redux'

export interface IRootState {
    images: any,
}

const rootReducer = combineReducers<IRootState>({
    images,
})

export default rootReducer