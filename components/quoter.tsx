'use client'
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { FC } from "react"


const Quoter:FC = ()=>{
    
    return(
            <Box mt={2} sx={{
                    ml:"5%",
                    width:"90%",
                    height:319,
                    backgroundColor: '#D9D9D9',
                    paddingY: '20px',
                    paddingX: '30px',
                    borderRadius: '16px',
                    boxShadow: '0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)',
                }}>
                    
                    
                    <Grid container spacing={2}>
                        <Grid item xs={12} marginBottom={5}>
                            <Typography variant="h4">Encuentra la mejor cotización para trasportar tu carga</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} sx={{
                        background:"#FFFF",
                        border:"2px solid #545454",
                        borderRadius:"16px",
                        padding:2
                    }}>
                            <Grid item xs={12} md={3}>
                                <TextField variant="outlined" label="Origen" />
                            </Grid>
                            <Grid item xs={12}  md={3}>
                                <TextField variant="outlined" label="Destino" />
                            </Grid>
                            <Grid item xs={12}  md={2}>
                                <DatePicker label="Fecha de embarque" />
                            </Grid>
                            <Grid item xs={12}  md={4} >
                                <TextField sx={{width:{md:"300px"}}} label="Carga" />
                            </Grid>
                        

                    </Grid>
                    <Grid container justifyContent={"flex-end"} spacing={2} mt={5}>
                        <Grid item>
                            <Button variant="contained" color="primary" sx={{
                                pl:5,
                                pr:5
                            }} >Cotizar</Button>
                        </Grid>
                    </Grid>
                        
                        
                       
                        
                        
                        
                   

                </Box>

            
        
            
               
        
    )
}


export default Quoter;