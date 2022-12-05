import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import KeyWord from '../components/KeyWord/KeyWord';
import DrawerMenu from '../components/Drawer';

// Styling the component for the Drawer Header

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

export default function HomePage() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* Drawer Menu */}

            <DrawerMenu />

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {/* Drawer Header */}

                <DrawerHeader />

                {/* Component to display Keyword data */}
                <KeyWord />
            </Box>
        </Box>
    );
}
