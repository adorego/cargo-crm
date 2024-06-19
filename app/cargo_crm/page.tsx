import Quoter from "@/components/quoter";
import { Grid } from "@mui/material";

interface CargoHomeProps{

}
export default function Page(){
    return (
        <Grid container sx={{textAlign:"center"}}  >
          <Grid item xs={12} sx={{textAlign:"center"}}>
            
          </Grid>
          <Grid item xs={12}>
            <Quoter />
          </Grid>
        </Grid>
      );
}

