import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

function Search(){
    return(
        <>
            <Grid style={{display:"flex",flexDirection:"column",width:"15em"}}>
                <TextField
                    label="Search"
                    variant="outlined"
                >
                </TextField>
                <Button
                    variant="contained"
                    color="primary"
                >
                    Search
                </Button>
            </Grid>
        </>
    );
}
export default Search;