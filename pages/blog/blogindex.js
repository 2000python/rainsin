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
    return (
            <ThemeContext.Provider value={theme}>
            <>
                <Head>
                    <title>Riansin</title>
                </Head>
                
                <ScrollBar />

                <div className='blog-index-box'>
                    <ArtNav />
                    <div className='blog-index-body'>
                        <div className='blog-index-body-left'>
                        </div>
                        <div className='blog-index-body-right'>

                        </div>
                    </div>
                    <div className='blog-index-fonter'>
                       <a></a>
                    </div>
                </div>
                <Mouse />
                {/* <div className='mianshi'>
                    找工作期间，先暂停一下！
                </div> */}
            </>
            </ThemeContext.Provider>
        )
}