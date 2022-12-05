// Importing required libraries

import React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from '@mui/icons-material/Article';
import ExtensionIcon from '@mui/icons-material/Extension';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MapIcon from '@mui/icons-material/Map';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import logo_small from '../images/longshot_logo_small.png'
import logo from '../images/longshot_logo.png'


const drawerWidth = 240;


// Defining the style for the drawer when it is open

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

// Defining the style for the drawer when it is closed

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    border: '0px',
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

// Styling the component for the drawer header
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));


// Styling the App Bar component 

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


// Styling the Drawer Menu

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const DrawerMenu = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    // States and function for sub-menus
    // const [subopen, setSubOpen] = useState(false);

    // const handleClick = () => {
    //     setSubOpen(!subopen);
    // };


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <AppBar position="fixed" open={open} sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <img src={logo_small} alt="logo" width="25px" height="25px" />
                    </IconButton>
                    <Typography variant="subtitle2" noWrap component="div" sx={{
                        fontFamily: 'Montserrat',
                        fontWeight: '500',
                        color: 'black',
                        marginTop: '4px',
                        fontSize: '13px'
                    }}>
                        Keyword Explorer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <img src={logo} alt="logo" width="150px"></img>
                    <IconButton onClick={handleDrawerClose} sx={{ marginLeft: 1 }}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>

                <List>
                    {['Dashboard', 'Recipes'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block', fontFamily: 'Montserrat' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: '#6200ea'
                                    }}
                                >
                                    {index % 2 === 0 ? <DashboardIcon fontSize="small" /> : <RestaurantMenuIcon fontSize="small" />}
                                </ListItemIcon>
                                <ListItemText disableTypography primary={<Typography variant="subtitle2" sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: '500',
                                    color: 'black',
                                    fontSize: '13px'
                                }}>{text}</Typography>} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Divider />

                <List sx={{ height: '400px' }}>
                    <ListItem key="profile" disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: '#6200ea'
                                }}
                            >
                                <ArticleIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText disableTypography primary={<Typography variant="subtitle2" sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: '500',
                                color: 'black',
                                fontSize: '13px'
                            }}>Blog</Typography>} sx={{ opacity: open ? 1 : 0 }} />
                            {/* {index !== 0 ? subopen ? <ExpandLess sx={{ display: open ? 'flex' : 'none' }} /> : <ExpandMore sx={{ display: open ? 'flex' : 'none' }} /> : <></>} */}

                        </ListItemButton>
                    </ListItem>

                    <ListItem key="profile" disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}

                            onClick={handleClick}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: '#6200ea'
                                }}
                            >
                                <ExtensionIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText disableTypography primary={<Typography variant="subtitle2" sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: '500',
                                color: 'black',
                                fontSize: '13px'
                            }}>Templates</Typography>} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key="profile" disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: '#6200ea'
                                }}
                            >
                                <IntegrationInstructionsIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText disableTypography primary={<Typography variant="subtitle2" sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: '500',
                                color: 'black',
                                fontSize: '13px'
                            }}>Integrations</Typography>} sx={{ opacity: open ? 1 : 0 }} />

                        </ListItemButton>
                    </ListItem>
                </List>

                <Divider />

                <List>
                    <ListItem key="profile" disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: '#6200ea'
                                }}
                            >
                                <AccountCircleIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText disableTypography primary={<Typography variant="subtitle2" sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: '500',
                                color: 'black',
                                fontSize: '13px'
                            }}>Om Pathak</Typography>} sx={{ opacity: open ? 1 : 0 }} />
                            {/* {index !== 0 ? subopen ? <ExpandLess sx={{ display: open ? 'flex' : 'none' }} /> : <ExpandMore sx={{ display: open ? 'flex' : 'none' }} /> : <></>} */}

                        </ListItemButton>
                    </ListItem>

                    <ListItem key="profile" disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: '#6200ea'
                                }}
                            >
                                <ShoppingCartIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText disableTypography primary={<Typography variant="subtitle2" sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: '500',
                                color: 'black',
                                fontSize: '13px'
                            }}>Change Plan</Typography>} sx={{ opacity: open ? 1 : 0 }} />

                        </ListItemButton>
                    </ListItem>

                    <ListItem key="profile" disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: '#6200ea'
                                }}
                            >
                                <MapIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText disableTypography primary={<Typography variant="subtitle2" sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: '500',
                                color: 'black',
                                fontSize: '13px'
                            }}>Product Roadmap</Typography>} sx={{ opacity: open ? 1 : 0 }} />

                        </ListItemButton>
                    </ListItem>

                    <ListItem key="profile" disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: '#6200ea'
                                }}
                            >
                                <NewspaperIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText disableTypography primary={<Typography variant="subtitle2" sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: '500',
                                color: 'black',
                                fontSize: '13px'
                            }}>What's New</Typography>} sx={{ opacity: open ? 1 : 0 }} />

                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default DrawerMenu
