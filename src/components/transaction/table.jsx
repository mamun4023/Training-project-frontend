import "./table.scss"
import React, {Component} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Data from '../../jsondata/transaction.json'

class TransactionTable extends Component{

    render() {
    return (
        <TableContainer component={Paper} className = "table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell className="tableCell">Tracking ID</TableCell>
                    <TableCell className="tableCell" align="right">Product</TableCell>
                    <TableCell className="tableCell" align="right">Customer</TableCell>
                    <TableCell className="tableCell" align="right">Date</TableCell>
                    <TableCell className="tableCell" align="right">Amount</TableCell>
                    <TableCell className="tableCell" align="right">Payment Method</TableCell>
                    <TableCell className="tableCell" align="right">Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {Data.map((row) => (
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell className="tableCell">{row.trackingId} </TableCell>
                        <TableCell className="tableCell" align="right">{row.productName}</TableCell>
                        <TableCell className="tableCell" align="right">{row.customer}</TableCell>
                        <TableCell className="tableCell" align="right">{row.date}</TableCell>
                        <TableCell className="tableCell" align="right">${row.amount}</TableCell>
                        <TableCell className="tableCell" align="right">{row.paymentMethod}</TableCell>
                        <TableCell className="tableCell" align="right">
                                <span className= {`status ${row.status}`}>{row.status}</span>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
}

export default TransactionTable;