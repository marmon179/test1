import {API, DataType, ResponseType,} from '../dal/api';
import {Dispatch} from 'redux';

const initState: InitialState = []

export const appReducer = (state: InitialState = initState, action: ActionType): InitialState => {
    switch (action.type) {
        case 'APP/SET-EMPLOYEES':
            return action.employees.data.map(tl => tl)
        case 'APP/ADD-EMPLOYEES':
            return [...state, {...action.employee}]
        case 'APP/REMOVE-EMPLOYEES':
            return state.filter((tl => tl.id !== action.id))
        default:
            return state
    }
}
//action
const setEmployeesAC = (employees: ResponseType) => ({type: 'APP/SET-EMPLOYEES', employees} as const)
export const addEmployeesAC = (employee: DataType) => ({type: 'APP/ADD-EMPLOYEES', employee} as const)
export const removeEmployeesAC = (id: number | string) => ({type: 'APP/REMOVE-EMPLOYEES', id} as const)

//thunks
export const getEmployeesTC = () => {
    return (dispatch: Dispatch) => {
        API.getEmployees()
            .then((res) => {
                dispatch(setEmployeesAC(res.data))
            })

    }
}

//type
export type InitialState = DataType[]
export type SetEmploysActionType = ReturnType<typeof setEmployeesAC>
export type AddEmploysActionType = ReturnType<typeof addEmployeesAC>
export type RemoveEmploysActionType = ReturnType<typeof removeEmployeesAC>
export type ActionType = SetEmploysActionType | AddEmploysActionType | RemoveEmploysActionType

