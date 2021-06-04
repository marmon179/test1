import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../bll/store';
import {addEmployeesAC, getEmployeesTC, removeEmployeesAC} from '../../bll/appReducer';
import {DataType} from '../../dal/api';
import {Employees} from './Employees';
import { v1 } from 'uuid';


export const EmployeesContainer = () => {

    const employees = useSelector<AppStateType, DataType[]>(state => state.app)
    const dispatch = useDispatch()

    const initialValues: initialValuesType = {
        email: '',
        first_name: '',
        last_name: '',
        id: v1()
    }

    useEffect(() => {
        dispatch(getEmployeesTC())
    }, [])

    const deleteEmployeesCallback = (id: number | string) => {
        dispatch(removeEmployeesAC(id))
    }
    const onSubmit = React.useCallback((values: initialValuesType) => {
        dispatch(addEmployeesAC(values))
    }, [dispatch])

    return (
        <Employees
            employees={employees}
            deleteEmployeesCallback={deleteEmployeesCallback}
            initialValues={initialValues}
            onSubmit={onSubmit}
        />

    );
}
//types
export type initialValuesType = {
    email: string
    first_name: string
    last_name: string
    id:string
}
