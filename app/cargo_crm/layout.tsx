import TopBar from "@/components/layout/topBar";
import { AppBar, Box, Grid } from "@mui/material"
import { FC, ReactNode } from "react"

interface CargoLayoutProps{
    children:ReactNode;
}

const CargoLayout:FC<CargoLayoutProps> = ({children})=>{
    return(
        <Box sx={{flexGrow:1}}>
            <TopBar />
            {children}
        </Box>
    )
}

export default CargoLayout;