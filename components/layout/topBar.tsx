'use client'
import { AppBar, Box, Button, Grid, Toolbar } from "@mui/material"
import Image from "next/image";

const TopBar = ()=>{
    return(
        <Box sx={{flexGrow:1}}>
        <AppBar position="static">
            <Toolbar>
                <Image 
                   src="/logo_1024x1024.png"
                   width={120}
                   height={120}
                   alt="Logo of CRM Cargo" 
                
                />
                <Box sx={{flexGrow:1}} />
                <Button color="inherit">Ingresar</Button>
            </Toolbar>
        </AppBar>    
        </Box>

    )
}

export default TopBar;