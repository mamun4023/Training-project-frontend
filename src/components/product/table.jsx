import "./table.scss"
import React, {Component} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, TablePagination} from "@mui/material";
import ProductData from '../../jsondata/product.json'


class TransactionTable extends Component{

    state = {
        products : ProductData,
        page  : 1,
        rowsPerPage  : 10,
    }

    handleChangePage = (event, newPage) => {
        this.setState({page : newPage});
      };

    handleChangeRowsPerPage = (event) => {
        this.setState({setRowsPerPage : parseInt(event.target.value, 10)}) 
        this.setState({page  : 1 });
      };


    render() {

        return (
            <>
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
                                <Avatar src= {row.thumbnail} />
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
            <TablePagination
             rowsPerPageOptions={[5, 10, 25]}
             component="div"
             count={this.state.products.length}
             rowsPerPage={this.state.rowsPerPage}
             page={this.state.page}
             onPageChange={this.handleChangePage}
             onRowsPerPageChange={this.handleChangeRowsPerPage}
             labelDisplayedRows={({ page }) => {
               return `Page: ${page}`;
             }}
             backIconButtonProps={
               this.state.page === 1 ? {disabled: true} : undefined
             }
            //  nextIconButtonProps={
            //    filteredUsers.length === 0 || filteredUsers.length < rowsPerPage? {disabled: true} : undefined
            //  }
           />
           </>
        );
    }
}

export default TransactionTable;