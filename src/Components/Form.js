import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './styles/Form.css';
import { useState } from 'react';

// function to validate the form


export default function Form() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        telefono: '',
        mensajeCiudadEnvio: '',
    })  
    
    const onchageText = (text) => (event) => {
        setForm({...form, [text]: event.target.value})
    }

    return (
        <div className='bg-img-4'>
            <span>
            <Box className='form'
                component='form'
                sx={{
                    '& > :not(style)': { m: 3, width: '35ch', backgroundColor: 'white', borderRadius: 1 }
                }}
            >
                <TextField
                value={form.name}
                onChange={onchageText('name')}
                placeholder='name'
                variant='outlined'
                />
                <TextField
                value={form.email}
                placeholder='E-mail'
                variant='outlined'
                />
                <TextField 
                value={form.telefono}
                placeholder='Telefono'
                variant='outlined'
                />
                <TextField
                value={form.mensajeCiudadEnvio}
                placeholder='Mensaje y ciudad de envio'
                variant='outlined'
                rows={5} multiline
                />
            </Box>
            </span>
        </div>
    )
}