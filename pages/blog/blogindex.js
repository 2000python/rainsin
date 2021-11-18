/*
 * @Author: 尉旭胜(Riansin)
 * @LastEditors: 尉旭胜(Riansin)
 */
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import ScrollBar from "../../components/scrollBar";
import ArtNav from '../../components/artnav';
import Head from 'next/head';
import Mouse from '../../components/mouse';
import { Affix } from 'antd';

const ThemeContext = React.createContext('light');

export default function blogIndex() {
    const [theme, useTheme] = useState('light');
    const [boxClass, useBoxclass] = useState({
        coverBgClass:"",
    })
    const itemCatalog = [
        {
            key: 1,
            content:'HTML'
        },
        {
            key: 2,
            content:'CSS'
        },
        {
            key: 3,
            content:'JS/TS'
        },
        {
            key: 4,
            content:'前端零散知识点'
        },
    ]
    const changeBg = (e) => {
        useBoxclass({
            coverBgClass:'cover-background-section'
        })
        e.target.lastChild.className = `cover-background-hide ${boxClass.coverBgClass}`
    }
    const recoverBg = (e) => {
        useBoxclass({
            coverBgClass:''
        })
        e.target.lastChild.className = `cover-background-hide`
    }
    return (
            <ThemeContext.Provider value={theme}>
            <>
                <Head>
                    <title>Apple trees-Riansin</title>
                </Head>
                
                <ScrollBar />

                <div className='blog-index-box'>
                    <ArtNav />
                    <div className='blog-index-body'>
                        <div className='blog-index-body-left'>
                            <Affix offsetTop={200}>
                                <div className='affix-left-box'>
                                    <div className='affix-left-box-item'>
                                        <span>LAEST</span>
                                        <br />
                                        <span>随便写写</span>
                                    </div>
                                    <div className='affix-left-catalog'>
                                        <ul className='affix-left-box-catalog'>
                                        {itemCatalog.map((data,index) => {
                                            return (
                                                <li key={data.key} className='affix-left-box-catalog-li' >
                                                    <Link href='#'>
                                                        <a className='affix-left-box-catalog-a' onMouseMove={changeBg} onMouseLeave={recoverBg}>    
                                                            {data.content}
                                                            <div className={'cover-background-hide '}>

                                                            </div>
                                                        </a>
                                                    </Link>
                                                    
                                                </li>
                                            )
                                        })}
                                        </ul>
                                    </div>
                                </div>
                            </Affix>
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