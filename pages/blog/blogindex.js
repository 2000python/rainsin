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
        {
            key: 5,
            content:'HTTP1.0/1.1'
        }
    ]
    const lastData = [
        {
            key: 1,
            title:'我的文章',
            content: '假装有我的文章',
            lastupdatetime:'2021.11.20',
            uploadtime: '2021.11.20',
            tag: 'Technology',
            kind:'css',
        },
        {
            key: 2,
            title:'我的文章2',
            content: '假装有我的文章2',
            lastupdatetime:'2021.11.20',
            uploadtime: '2021.11.20',
            tag: 'Live',
            kind:'吃',
        },
        {
            key: 3,
            title:'我的文章3',
            content: '假装有我的文章3',
            lastupdatetime:'2021.11.20',
            uploadtime: '2021.11.20',
            tag: 'Skill',
            kind:'资源'
        },
        {
            key: 4,
            title:'我的文章4',
            content: '假装有我的文章4',
            lastupdatetime:'2021.11.20',
            uploadtime: '2021.11.20',
            tag: 'Technology',
            kind:'JS/TS'
        },
        {
            key: 5,
            title:'我的文章5',
            content: '假装有我的文章5',
            lastupdatetime:'2021.11.20',
            uploadtime: '2021.11.20',
            tag: 'Technology',
            kind:'JS/TS'
        },
        {
            key: 6,
            title:'我的文章6',
            content: '假装有我的文章6',
            lastupdatetime:'2021.11.20',
            uploadtime: '2021.11.20',
            tag: 'Technology',
            kind:'JS/TS'
        },
        {
            key: 7,
            title:'我的文章7',
            content: '假装有我的文章7',
            lastupdatetime:'2021.11.20',
            uploadtime: '2021.11.20',
            tag: 'Technology',
            kind:'JS/TS'
        },
        {
            key: 8,
            title:'我的文章8',
            content: '假装有我的文章8',
            lastupdatetime:'2021.11.20',
            uploadtime: '2021.11.20',
            tag: 'Technology',
            kind:'JS/TS'
        },
    ]
    let scrollTop = 0,footerHight=0,Affix_Buttom=0;
    const changeBg = (e) => {
        if (e.target.firstChild.nodeType === 1) {
            useBoxclass({
                coverBgClass:'cover-background-section'
            })
            e.target.firstChild.className = `cover-background-hide ${boxClass.coverBgClass}`
        } else {
            useBoxclass({
                coverBgClass:'cover-background-section'
            })
            e.target.previousSibling.className = `cover-background-hide ${boxClass.coverBgClass}`

        }
    }
    const recoverBg = (e) => {
        
        if (e.target.firstChild.nodeType === 1) {
            useBoxclass({
                coverBgClass:''
            })
            e.target.firstChild.className = `cover-background-hide`
        } else {
            useBoxclass({
                coverBgClass:''
            })
            e.target.previousSibling.className = `cover-background-hide`
        }
    }
    return (
            <ThemeContext.Provider value={theme}>
            <>
                <Head>
                    <title>Apple trees｜{ 'Laest'} (Rainsin)</title>
                </Head>
                
                <ScrollBar />

                <div className='blog-index-box'>
                    <ArtNav />
                    <div className='blog-index-body'>
                        <div className='blog-index-body-left'>
                            <Affix offsetTop={200}>
                                <div className='affix-left-box'>
                                    <div className='affix-left-box-item'>
                                        <span>Laest</span>
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
                                                            <div className='cover-background-hide '>
                                                                
                                                            </div>
                                                            <span>{data.content}</span>
                                                            
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
                            <div className='blog-index-body-right-box'>
                                <div className='word-daily'>
                                    <span>
                                        假装有个数据接口。
                                    </span>
                                </div>
                                <ul className='blog-index-body-right-indexlist'>
                                    {lastData.map((data, index) => {
                                        return (                                           
                                            <li key={data.key} className='blog-index-body-right-indexlist-box'>
                                                <Link href='#'>
                                                    <a className='blog-index-body-right-indexlist-item'>
                                                        <div className=''></div>
                                                    </a>
                                                </Link>
                                            </li>                                  
                                        )}
                                    )}
                                </ul>
                             </div>           
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