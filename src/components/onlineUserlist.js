import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {Stack, Avatar, Card} from '@mui/material';
import SearchBox from './userSearch';
import UserData from './user.json'

export default function OnlineUserList(){

    return(
        <>
            <Card sx={{ height : "100vh" }} > 
            
             <SearchBox/> 
             
            {
                UserData.map(data =>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <List
                           
                        >
                            <ListItem  sx = {{p : 0, marginTop :-2}}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Avatar src= {data.profile_pic} />
                                    </ListItemIcon>
                                    <ListItemText primary= {data.name } />
                                </ListItemButton>
                            </ListItem>
                        </List>
                 </Box>
                )
            }
            </Card>
        </>
    )
}



