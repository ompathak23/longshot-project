import React, { useState } from 'react'
import { Box, Button, Container, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import TablePanel from './TablePanel'

const KeyTable = (props) => {
    const [value, setValue] = useState('1');
    const handleChange = (e, value) => {
        setValue(value)
    }

    return (
        <Container sx={{ width: "70%", marginTop: '25px', }}>
            <Button sx={{
                marginLeft: '650px', marginBottom: '-60px', fontFamily: 'Montserrat', fonWeight: '700', fontSize: '12px', textTransform: 'none', color: 'white', backgroundColor: '#6200ea', borderRadius: '8px'
            }}>Add to List</Button>
            <TabContext value={value}>
                < Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange}>
                        <Tab label="Broad Match" value='1' sx={{ fontFamily: 'Montserrat', fontWeight: '600', textTransform: 'none', fontSize: '11px' }} />
                        <Tab label="Related" value='2' sx={{ fontFamily: 'Montserrat', fontWeight: '600', textTransform: 'none', fontSize: '11px' }} />
                        <Tab label="Questions" value='3' sx={{ fontFamily: 'Montserrat', fontWeight: '600', textTransform: 'none', fontSize: '11px' }} />
                    </TabList>
                </Box>
                <TabPanel value='1' sx={{ marginLeft: '-58px' }}><TablePanel data={props.broad} /></TabPanel>
                <TabPanel value='2' sx={{ marginLeft: '-58px' }}><TablePanel data={props.related} /></TabPanel>
                <TabPanel value='3' sx={{ marginLeft: '-58px' }}><TablePanel data={props.question} /></TabPanel>
            </TabContext>
        </Container >
    )
}

export default KeyTable