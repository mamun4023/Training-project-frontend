import React, {Component} from 'react';
import Compose from 'recompose/compose';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import {withStyles} from '@mui/styles';
 

const Styles = (theme)=>({
    status : {
        padding: "5px",
        borderRadius: "5px"
    },
    pending : {
        color: "red",
    },
    approved : {
        color: "green",
    }
})

const TransactionQuery = gql`
  query ($limit: ID!, $page : ID!) {
    transactions(limit: $limit, page : $page) {
        id,
        tranc_id,
        productName,
        userName,
        date,
        amount,
        pay_method,
        status,
    }
  }`

class TransactionTable extends Component{

    render() {
    const {classes} = this.props;
    const {transactions, loading} = this.props.data;

    if(loading){
        return <div> Loding...</div>
    }

    return (
        <TableContainer component={Paper} className = "table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell className="tableCell" align="left">ID</TableCell>
                    <TableCell className="tableCell" align="left">Tracking ID</TableCell>
                    <TableCell className="tableCell" align="left">Product</TableCell>
                    <TableCell className="tableCell" align="left">Customer</TableCell>
                    <TableCell className="tableCell" align="left">Date</TableCell>
                    <TableCell className="tableCell" align="left">Amount</TableCell>
                    <TableCell className="tableCell" align="left">Payment Method</TableCell>
                    <TableCell className="tableCell" align="left">Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {transactions?.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >   
                        <TableCell className="tableCell" align="left">{row.id} </TableCell>
                        <TableCell className="tableCell" align="left">{row.tranc_id} </TableCell>
                        <TableCell className="tableCell" align="left">{row.productName}</TableCell>
                        <TableCell className="tableCell" align="left">{row.userName}</TableCell>
                        <TableCell className="tableCell" align="left">{row.date}</TableCell>
                        <TableCell className="tableCell" align="left">${row.amount}</TableCell>
                        <TableCell className="tableCell" align="left">{row.pay_method}</TableCell>
                        <TableCell className="tableCell" align="left">
                                <span className= {row.status== "pending"?classes.pending : classes.approved} >{row.status}</span>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
}

export default Compose (graphql(TransactionQuery, {
    options : (props)=> ({
        variables : {
            limit : 10,
            page : 1
        }
    })
}), withStyles(Styles))(TransactionTable);