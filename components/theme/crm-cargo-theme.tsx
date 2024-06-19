'use client'

import { ThemeProvider, alpha, createTheme, getContrastRatio } from "@mui/material"
import { FC, ReactNode } from "react"

const theme = createTheme({
    typography:{
        fontFamily:[
        'Inter',
        'sans-serif'
        ].join(',')
    },
    palette:{
      primary:{
        main:"#0A0F44",
        light: alpha("#0A0F44", 0.5),
        dark: alpha("#0A0F44", 0.9),
        contrastText: getContrastRatio("#0A0F44", '#fff') > 4.5 ? '#fff' : '#111',
      },
      secondary:{
        main:"#45380A"
      },
      contrastThreshold: 4.5,
      
    }
  
  })

  interface CrmCargoThemeProps{
    children:ReactNode
  }

  const CrmCargoTheme:FC<CrmCargoThemeProps> = ({children})=>{
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
  }

  export default CrmCargoTheme;