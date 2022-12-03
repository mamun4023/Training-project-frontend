import React, {Component} from "react";


class Logout extends Component{
    constructor(props){
        super(props)
        this.state = {
            open  : false
        }
    }

    handleClose(){
        this.setState({open : false})
    }

    handleClick(){
        this.setState({open : true})
    }


    render(){
        return(
            <>
                <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                    Open Popover
                </Button>
                <Popover
                    id={id}
                    open={this.state.open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                </Popover>
            </>
        )
    }
}

export default Logout;