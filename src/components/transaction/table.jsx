import "./table.scss"
import React, {Component} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const Data = [
    {
        trackingId : 134342,
        productName : "Acer Nitro 5",
        customer : "John Smit",
        date : "1 Marth",
        amount : "785",
        paymentMethod : "Cash on Delivery",
        status : "Approved"
    },{
        trackingId : 125568,
        productName : "PlayStation 5",
        customer : "Michael Doe",
        date : "1 Marth",
        amount : "900",
        paymentMethod : "Online Payment",
        status : "Pending"
    },
    {
        trackingId : 665523,
        productName : "Acer Nitro 5",
        customer : "John Smit",
        date : "1 Marth",
        amount : "785",
        paymentMethod : "Cash on Delivery",
        status : "Approved"
    },
    {
        trackingId : 889856,
        productName : "Acer Nitro 5",
        customer : "John Smit",
        date : "1 Marth",
        amount : "785",
        paymentMethod : "Cash on Delivery",
        status : "Approved"
    }
]

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