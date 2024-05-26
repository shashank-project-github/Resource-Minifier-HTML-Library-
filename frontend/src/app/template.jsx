'use client';

import React, { useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import Navbar from './Navbar';
import { UserProvider } from '../context/userContext';
 


const Template = ({ children }) => {

    return (
        <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={1000}>
            <UserProvider>
            <Navbar />
            {children}
            </UserProvider>
        </SnackbarProvider>
    )
}

export default Template;