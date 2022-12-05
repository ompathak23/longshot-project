import React from 'react'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/material'

const Header = (props) => {
    return (
        <Container sx={{ width: '90%', height: '100px' }}>
            <Box sx={{ display: 'flex', direction: 'row', alignItems: 'center', gap: '8px' }}>
                <Typography variant="h6" sx={{
                    fontFamily: 'Montserrat',
                    fontWeight: '600'
                }}>Keyword:</Typography>
                <Typography variant="subtitle1" sx={{ fontFamily: 'Montserrat', fontWeight: '500', color: 'grey', marginTop: '2px' }}>{props.topic}</Typography>
            </Box>
            <Box sx={{ display: 'flex', direction: 'row', alignItems: 'center', gap: '5px' }}>
                <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '400', color: 'grey', fontSize: '14px' }}>Database:</Typography>
                <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '400', color: 'grey', fontSize: '14px' }}>{props.country === "us" ? "United States" : ""}</Typography>
                <img src="https://flagcdn.com/us.svg" width="20" alt="United States" />
            </Box>
        </Container>
    )
}

export default Header

