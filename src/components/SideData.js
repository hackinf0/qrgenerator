import React from 'react'
import Generator from '../components/Generator'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import QrCodeRoundedIcon from '@mui/icons-material/QrCodeRounded';
import CropFreeRoundedIcon from '@mui/icons-material/CropFreeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

export const  SideData = [
    {
        title:'Generez',
        icon:<HomeRoundedIcon />,
        link:'/',
        content:<Generator/>
    },
    {
        title:'QrGenerated',
        icon:<QrCodeRoundedIcon />,
        link:'/QrGenerated',
        content:<Generator/>
    },
    {
        title:'Scann',
        icon:<CropFreeRoundedIcon />,
        link:'/Scann',
        content:<Generator/>
    },
    {
        title:'About',
        icon:<InfoRoundedIcon />,
        link:'/About',
        content:<Generator/>
    }
]
