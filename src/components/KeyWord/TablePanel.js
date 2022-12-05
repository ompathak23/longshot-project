import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { Container } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import { Tooltip, styled } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import { tooltipClasses } from '@mui/material/Tooltip';
import CircleIcon from '@mui/icons-material/Circle';


const intentMap = {
    0: {
        id: "C",
        type: "Commercial",
        'hoverText': "The user wants to investigate brands or services.",
        color: { bg: "#FCE081", text: "#A75800", hover: "#ffca6e" },
    },
    1: {
        id: "I",
        type: "Informational",
        'hoverText': "The user wants to find an answer to a specific question.",
        color: { bg: "#C4E5FE", text: "#006DCA", hover: "#61c6ff" },
    },
    2: {
        id: "N",
        type: "Navigational",
        'hoverText': "The user wants to find a specific page or site.",
        color: { bg: "#EDD9FF", text: "#8649E1", hover: "#c59dfa" },
    },
    3: {
        id: "T",
        type: "Transactional",
        'hoverText': "The user wants to complete an action (conversion).",
        color: { bg: "#9EF2C9", text: "#007C65", hover: "#11d6a6" },
    },
};


const keywordDifficulty = function (value) {
    if (value > 85) {
        return {
            color: "#D1002F",
        };
    } else if (value >= 70) {
        return {
            color: "#FF4953",
        };
    } else if (value >= 50) {
        return {
            color: "#FF8C43",
        };
    } else if (value >= 30) {
        return {
            color: "#FDC23C",
        };
    } else if (value >= 15) {
        return {
            color: "#59DDAA",
        };
    } else {
        return {
            color: "#009F81",
        };
    }
}

const headCells = [
    {
        id: 'keyword',
        numeric: false,
        disablePadding: true,
        label: 'Keyword',
    },
    {
        id: 'intent',
        numeric: false,
        disablePadding: true,
        label: 'Intent',
    },
    {
        id: 'volume',
        numeric: true,
        disablePadding: false,
        label: 'Volume',
    },
    {
        id: 'kd',
        numeric: true,
        disablePadding: false,
        label: 'KD%',
    },
    {
        id: 'cpc',
        numeric: true,
        disablePadding: false,
        label: 'CPC(USD)',
    },
    {
        id: 'com',
        numeric: true,
        disablePadding: false,
        label: 'Com.',
    },
    {
        id: 'results',
        numeric: true,
        disablePadding: false,
        label: 'Results',
    },

];

const CustomToolTip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));


function EnhancedTableHead() {

    return (
        <TableHead>
            <TableRow>

                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        inputProps={{
                            'aria-label': 'select all',
                        }}
                        size="small"
                    />
                </TableCell>

                {headCells.map((headCell) => (

                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                    >
                        <TableSortLabel sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '11px',
                            padding: '5px'
                        }}>
                            {headCell.label}
                        </TableSortLabel>

                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const TablePanel = (props) => {
    const rows = props.data;

    return (
        <Container sx={{ width: '900px', marginLeft: '-45px' }}>
            <Box sx={{ width: '100%', alignItems: 'center' }}>
                <Paper elevation={0} sx={{ width: '100%', mb: 2 }}>
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 800 }}
                            aria-labelledby="tableTitle"
                            size='small'
                        >
                            <EnhancedTableHead />
                            <TableBody>
                                {rows.map((row) => {
                                    const labelId = row.uniqueId;
                                    const intent = intentMap[row[2]];

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row[0]}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    size="small"
                                                />
                                            </TableCell>

                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                                style={{
                                                    fontFamily: 'Montserrat',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '10px',
                                                }}
                                            >
                                                {row[0]}
                                            </TableCell>

                                            <TableCell align="center">
                                                <CustomToolTip title={intent.hoverText} arrow TransitionComponent={Zoom}>
                                                    <IconButton sx={{
                                                        backgroundColor: intent.color.bg,
                                                        color: intent.color.text,
                                                        borderRadius: '50%',
                                                        width: '20px',
                                                        height: '20px',
                                                        fontSize: '10px',
                                                        fontFamily: 'Montserrat',
                                                        fontStyle: 'normal',
                                                        fontWeight: '600',
                                                        marginLeft: '-25px',
                                                        '&:hover': {
                                                            backgroundColor: intent.color.hover,
                                                            border: '0px',

                                                        },
                                                    }}>
                                                        {intent.id}
                                                    </IconButton>
                                                </CustomToolTip>
                                            </TableCell>

                                            <TableCell align="right" style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '10px',
                                            }}>{row[1]}</TableCell>

                                            <TableCell align="right" style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '10px',
                                            }}>
                                                <div style={{ display: 'flex', direction: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: '5px' }}>
                                                    <span>{row[7]}</span>
                                                    <span><CircleIcon sx={{ backgroundColor: keywordDifficulty(row[7]), fontSize: '12px', marginTop: '3px' }} /></span>
                                                </div>


                                            </TableCell>

                                            <TableCell align="right" style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '10px',
                                            }}>{row[3]}</TableCell>

                                            <TableCell align="right" style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '10px',
                                            }}>{row[4]}</TableCell>

                                            <TableCell align="right" style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '10px',
                                            }}>{Intl.NumberFormat("en", { notation: "compact" }).format(parseInt(row[5]))}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </Container >
    )
}

export default TablePanel