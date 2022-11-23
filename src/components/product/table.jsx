import "./table.scss"
import React, {Component} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar} from "@mui/material";
import ProductData from '../../jsondata/product.json'
import ImageIcon from '@mui/icons-material/Image';

class TransactionTable extends Component{

    state = {
        products : ProductData
    }

    render() {

        return (
            <TableContainer component={Paper} className = "table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell">ID</TableCell>
                            <TableCell className="tableCell">Image</TableCell>
                            <TableCell className="tableCell" align="left">Title</TableCell>
                            <TableCell className="tableCell" align="left">Price</TableCell>
                            <TableCell className="tableCell" align="left">Discount</TableCell>
                            <TableCell className="tableCell" align="left">rating</TableCell>
                            <TableCell className="tableCell" align="left">Stock</TableCell>
                            <TableCell className="tableCell" align="left">Brand</TableCell>
                            <TableCell className="tableCell" align="left">Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.products.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="tableCell">{row.id} </TableCell>
                            <TableCell className="tableCell"> 
                                <Avatar src= {row.thumbnail} variant="rounded" >
                                    <ImageIcon />
                                </Avatar>
                            </TableCell>
                            <TableCell className="tableCell">{row.title} </TableCell>
                            <TableCell className="tableCell">{row.price} </TableCell>
                            <TableCell className="tableCell">{row.discountPercentage} </TableCell>
                            <TableCell className="tableCell">{row.rating} </TableCell>
                            <TableCell className="tableCell">{row.stock} </TableCell>
                            <TableCell className="tableCell">{row.brand} </TableCell>
                            <TableCell className="tableCell">{row.category} </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default TransactionTable;