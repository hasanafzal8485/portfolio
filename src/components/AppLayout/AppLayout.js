import React from 'react'
import {Box, useColorModeValue} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'
import {NextSeo} from 'next-seo'
const UpDown = dynamic(() => import('../Animations'))
const Nav = dynamic(() => import('../NavBar/Nav'))
const Footer = dynamic(() => import('../Footer/Footer'))
const SVG = dynamic(() => import('../Svg'))

const AppLayout = ({children}) => {
    const router = useRouter()
    return (
        <>
            <NextSeo
                canonical={`https://hasan-afzal.vercel.app/${router.asPath}`}
                openGraph={{url: `https://hasan-afzal.vercel.app/${router.asPath}`}}
            />
            <UpDown type='normal'>
                <SVG icon='triangle' width={48} stroke left='10%' top='20%'/>
                <SVG icon='hexa' width={48} stroke left='60%' top='70%'/>
                <SVG icon='box' width={6} left='60%' top='15%'/>
            </UpDown>
            <UpDown type='wide'>
                <SVG icon='triangle' width={24} stroke left='65%' top='8%'/>
                <SVG icon='triangle' width={12} stroke left='90%' top='50%'/>
                <SVG icon='triangle' width={16} stroke left='30%' top='65%'/>
            </UpDown>
            <UpDown type='slow'>
                <SVG icon='circle' width={20} hiddenMobile left='85%' top='25%'/>
                <SVG icon='circle' hiddenMobile stroke width={24} left='5%' top='70%'/>
                <SVG icon='circle' width={6} left='4%' top='20%'/>
                <SVG icon='circle' width={12} left='50%' top='60%' color='gray.100'/>
            </UpDown>
            <Nav/>
            <Box bg={useColorModeValue(`rgba(255, 255, 255, 0.8)`, `rgba(26, 33, 42, 0.8)`)}>
                {children}
            </Box>
            <Footer/>
        </>
    )
}

export default AppLayout
