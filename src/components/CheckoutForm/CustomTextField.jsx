import React from 'react'
import { TextField, Grid } from '@mui/material'
import { useForm, Controller} from 'react-hook-form'

const FormInput = ({name, label, required}) => {
    const { control } = useForm()
    const isError = false

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                as={TextField}
                name={name}
                control={control}
                label={label}
                fullWidth 
                required={required}
                error={isError}
            />
        </Grid>
    )
}

export default FormInput;
