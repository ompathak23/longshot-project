import { Container, Box, Typography, Divider, Button, Tooltip, styled } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import React from 'react'

const intentMap = {
    0: {
        type: "Commercial",
        'hoverText': "The user wants to investigate brands or services.",
        color: { bg: "#FCE081", text: "#A75800", hover: "#ffca6e" },
    },
    1: {
        type: "Informational",
        'hoverText': "The user wants to find an answer to a specific question.",
        color: { bg: "#C4E5FE", text: "#006DCA", hover: "#61c6ff" },
    },
    2: {
        type: "Navigational",
        'hoverText': "The user wants to find a specific page or site.",
        color: { bg: "#EDD9FF", text: "#8649E1", hover: "#c59dfa" },
    },
    3: {
        type: "Transactional",
        'hoverText': "The user wants to complete an action (conversion).",
        color: { bg: "#9EF2C9", text: "#007C65", hover: "#11d6a6" },
    },
};

const keywordDifficulty = function (value) {
    if (value > 85) {
        return {
            rating: "Very hard",
            text:
                "The absolute hardest keywords to compete for, especially for a new website. These will demand a lot of on page SEO, link building, and content promotion efforts to eventually rank and acquire traffic.",
            color: "#D1002F",
        };
    } else if (value >= 70) {
        return {
            rating: "Hard",
            text:
                "Even stiffer competition. These keywords will demand more effort in terms of getting higher authority referring domains in order to rank your well-optimized and helpful content among the top pages.",
            color: "#FF4953",
        };
    } else if (value >= 50) {
        return {
            rating: "Difficult",
            text:
                "You'll need to have some backlinks in addition to your well-structured, helpful and optimized content in order to compete here.",
            color: "#FF8C43",
        };
    } else if (value >= 30) {
        return {
            rating: "Possible",
            text:
                "Slightly more competition. You'll need well-structured and unique content appropriately optimized for your keywords.",
            color: "#FDC23C",
        };
    } else if (value >= 15) {
        return {
            rating: "Easy",
            text:
                "These keywords have some competition but are still possible to rank for when you're starting out. To be able to rank for these, you'll need quality content focused on the keyword's intent.",
            color: "#59DDAA",
        };
    } else {
        return {
            rating: "Very easy",
            text:
                "These are the best opportunities to start ranking new webpages on Google as soon as possible without backlinks.",
            color: "#009F81",
        };
    }
}

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', marginTop: '5px' }}>
            <CircularProgress
                variant="determinate"
                sx={{
                    color: 'grey',
                    opacity: '0.3'
                }}
                size={40}
                thickness={10}
                value={100}
            />
            <CircularProgress
                variant="determinate"
                sx={{
                    color: props.color,
                    position: 'absolute',
                    left: 0,
                }}
                size={40}
                thickness={10}
                value={props.value}
            />
        </Box>
    );
}

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


const Stats = (props) => {
    const difficulty = keywordDifficulty(props.kd);
    const intent = intentMap[0];

    return (
        <Container sx={{ width: '90%', height: '300px', display: 'flex', direction: 'row', gap: '25px', justifyContent: 'center' }}>
            <Box sx={{ border: '2.5px solid #eeedf5', borderRadius: '12px', padding: '30px', width: '35%' }}>
                <div>
                    <Typography variant="body2" sx={{ fontFamily: 'Montserrat', fontWeight: '500', color: 'grey' }}>Volume</Typography>
                    <div style={{ display: 'flex', direction: 'row', gap: '10px' }}>
                        <Typography variant="h5" sx={{ fontFamily: 'Montserrat', fontWeight: '700', color: 'black' }}>{props.volume}</Typography>
                        <img src="https://flagcdn.com/us.svg" width="25" alt="United States" />
                    </div>
                </div>
                <Divider variant="middle" sx={{ m: 2 }} />
                <div>
                    <div style={{ paddingBottom: '15px' }}><Typography variant="body2" sx={{ fontFamily: 'Montserrat', fontWeight: '500', color: 'grey' }}>Keyword Difficulty</Typography></div>
                    <div style={{ display: 'flex', direction: 'row', gap: '15px' }}>
                        <div>
                            <Typography variant="h5" sx={{ fontFamily: 'Montserrat', fontWeight: '700', color: 'black' }}>{props.kd}%</Typography>
                            <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '500', color: 'grey', fontSize: '14px' }}>{difficulty.rating}</Typography>
                        </div>
                        <div>
                            <CircularProgressWithLabel value={props.kd} color={difficulty.color} />
                        </div>
                    </div>
                    <div><Typography variant="body2" sx={{ fontFamily: 'Montserrat', fontWeight: '300', color: 'grey', fontSize: '12px', marginTop: '5px' }}>{difficulty.text}</Typography></div>
                </div>
            </Box>

            <Box sx={{ width: '35%' }}>

                <div style={{ border: '2.5px solid #eeedf5', borderRadius: '12px', padding: '18px', marginBottom: '10px' }}>
                    <Typography variant="body2" sx={{ fontFamily: 'Montserrat', fontWeight: '500', color: 'grey' }}>Intent</Typography>
                    <CustomToolTip title={intent.hoverText} arrow TransitionComponent={Zoom}>
                        <Button variant="contained" size="small" disableElevation sx={{
                            boxShadow: 'none',
                            textTransform: 'none',
                            backgroundColor: intent.color.bg,
                            borderRadius: '8px',

                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontSize: 10,
                            fontWeight: 600,
                            color: intent.color.text,

                            '&:hover': {
                                backgroundColor: intent.color.hover,
                                border: '0px',
                                boxShadow: 'none',
                            },

                            marginTop: '8px'
                        }}>{intent.type}</Button>
                    </CustomToolTip>
                </div>

                <div style={{ border: '2.5px solid #eeedf5', borderRadius: '12px', padding: '18px', marginBottom: '10px' }}>
                    <Typography variant="body2" sx={{ fontFamily: 'Montserrat', fontWeight: '500', color: 'grey' }}>Results</Typography>
                    <Typography variant="h5" sx={{ fontFamily: 'Montserrat', fontWeight: '700', color: 'black' }}>{props.results}M</Typography>
                </div>

                <div style={{ display: 'flex', direction: 'row', gap: '100px', border: '2.5px solid #eeedf5', borderRadius: '12px', padding: '18px', flexWrap: 'wrap' }}>
                    <div>
                        <Typography variant="body2" sx={{ fontFamily: 'Montserrat', fontWeight: '500', color: 'grey' }}>CPC</Typography>
                        <Typography variant="h5" sx={{ fontFamily: 'Montserrat', fontWeight: '700', color: 'black' }}>${props.cpc}</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" sx={{ fontFamily: 'Montserrat', fontWeight: '500', color: 'grey' }}>Com.</Typography>
                        <Typography variant="h5" sx={{ fontFamily: 'Montserrat', fontWeight: '700', color: 'black' }}>{props.com}</Typography>
                    </div>
                </div>
            </Box>
        </Container>
    )
}

export default Stats