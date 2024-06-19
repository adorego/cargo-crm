'use client'

import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { FC, ReactNode } from "react"

interface DatePickerCargoProps{
    children:ReactNode
}
const DatePickerCargo:FC<DatePickerCargoProps> = ({children})=>{
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
        </LocalizationProvider>
    )
}

export default DatePickerCargo;