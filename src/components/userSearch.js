
import {TextField, Stack} from '@mui/material';

export default function UserSearch(){
    return(
        <>
            <Stack 
                sx={{
                    margin : 4
                }}
            >  
                <TextField id="standard-basic" label="Search..." variant="standard" />
            </Stack>
        </>
    )
}