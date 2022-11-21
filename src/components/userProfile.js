import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, CardActionArea, CardActions, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Stack } from '@mui/system';
import UserData from './user.json';

export default function Profile(){
    return(
        <>
               <Card sx={{ maxWidth: 345, height : "100vh" }}>
                    <CardContent> 
                        <Avatar
                            sx={{ width: 150, height: 150, margin : "auto", border : "5px solid #2979ff"}}
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        />
                        <Typography component="h2" align='center' sx={{ fontSize : 25, fontWeight : "bold", marginTop : 3 }}>
                            Androl Nikka
                        </Typography>
                        <Typography component="h2" align='center' sx={{ fontSize : 12, marginTop : 0 }}>
                            Founder & CEO of NIKLA
                        </Typography>
                        <Typography>
                            <List >
                               <ListItem sx = {{p : 0}}>
                                    <ListItemIcon>
                                       <LocationOnIcon/>
                                   </ListItemIcon>
                                   <ListItemText sx = {{marginLeft : -2}} primary= "Seattle 43-len, USA" />
                               </ListItem>
                               <ListItem sx = {{p : 0}}>
                                    <ListItemIcon>
                                       <PhoneIcon/>
                                   </ListItemIcon>
                                   <ListItemText sx = {{marginLeft : -2}} primary= "+1542452655" />
                               </ListItem>
                               <ListItem sx = {{p : 0}}>
                                    <ListItemIcon>
                                       <EmailIcon/>
                                    </ListItemIcon>
                                    <ListItemText sx = {{marginLeft : -2}} primary= "androl-nikka@gmail.com" /> 
                               </ListItem>
                           </List>
                        </Typography>
                        <Typography sx = {{marginTop : 5}}>
                            Recent Chat With
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{ padding : 2 }}
                        >
                            {
                                UserData.map(data =>
                                 <Avatar src = {data.profile_pic} />    
                                )
                            }
                        </Stack>
                </CardContent>
             </Card>    
        </>
    )
}

