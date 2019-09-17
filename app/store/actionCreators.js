import { ON_CHANGE_DATA, CHANGE_INPUT_VALUE, DELETE_ID } from "./actionTypes";

export const getChangeInputValue = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getOnChangeData = () => ({
    type: ON_CHANGE_DATA
})

export const getOpeniD = (index) => ({
    type: DELETE_ID,
    index
})