import React from 'react'
import s from './Employee.module.css'
import {DataType} from '../../../dal/api';
import {
    Button, createStyles, makeStyles,
    Paper, Table, TableCell, TableContainer,
    TableHead, TableRow, Theme
} from '@material-ui/core';


export function Employee(props: EmployeePropsType) {
    const deleteCallback = () => {
        props.deleteEmployeesCallback(props.employee.id)
    }
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            table: {
                minWidth: 500,
            },
        }),
    );


    const classes = useStyles()
    return (
        <div className={s.employee}>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">{props.employee.first_name}</TableCell>
                            <TableCell align="center">{props.employee.last_name}</TableCell>
                            <TableCell align="center">{props.employee.email}</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <Button variant="contained" color="secondary" onClick={deleteCallback}>Delete</Button>
        </div>
    )
}

//types
type EmployeePropsType = {
    employee: DataType
    deleteEmployeesCallback: (id: number | string) => void
}