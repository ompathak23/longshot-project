import React from 'react'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/material'

const Header = (props) => {
    return (
        <Container sx={{ width: '85%', height: '100px' }}>
            <Box sx={{ display: 'flex', direction: 'row', alignItems: 'center', gap: '8px' }}>
                <Typography variant="h6" sx={{
                    fontFamily: 'Montserrat',
                    fontWeight: '600',
                    fontSize: '18px'
                }}>Keyword:</Typography>
                <Typography variant="subtitle2" sx={{ fontFamily: 'Montserrat', fontWeight: '500', color: 'grey', marginTop: '2px' }}>{props.topic}</Typography>
            </Box>
            <Box sx={{ display: 'flex', direction: 'row', alignItems: 'center', gap: '5px' }}>
                <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '400', color: 'grey', fontSize: '12px' }}>Database:</Typography>
                <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '400', color: 'grey', fontSize: '12px' }}>{props.country === "us" ? "United States" : ""}</Typography>
                <img src="https://flagcdn.com/us.svg" width="18" alt="United States" />
            </Box>
        </Container>
    )
}

export default Header

