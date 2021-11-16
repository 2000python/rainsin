/*
 * @Author: 尉旭胜(Riansin)
 * @LastEditors: 尉旭胜(Riansin)
 */
import React,{useState,useEffect} from 'react'
import ScrollBar from "../../components/scrollBar";
import ArtNav from '../../components/artnav';
import Head from 'next/head';
import Mouse from '../../components/mouse'

const ThemeContext = React.createContext('light');

export default function blogIndex() {
    const [theme, useTheme] = useState('light');
    const [top, useTop] = useState();
    const [isWind,useIswind] = useState(false)
    useEffect(() => {
        window.onscroll = () => {
            const x = document.documentElement.scrollTop;
            useTop(x)
        }
        if (top < 100) {
            useIswind(false)
        } else {
            useIswind(true)
        }
    })
    return (
            <ThemeContext.Provider value={theme}>
            <>
                <Head>
                    <title>Riansin</title>
                </Head>
                <ScrollBar />
                <div className='blog-index-box'>
                    <ArtNav iswind={isWind} />
                    <div className='blog-index-body'>
                        <div className='blog-index-body-left'>
                            {top}
                        </div>
                        <div className='blog-index-body-right'>

                        </div>
                    </div>
                    <div className='blog-index-fonter'>
                       
                    </div>
                </div>
                {/* <div className='mianshi'>
                    找工作期间，先暂停一下！
                </div> */}
            </>
            </ThemeContext.Provider>
        )
}