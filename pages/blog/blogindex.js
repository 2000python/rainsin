/*
 * @Author: 尉旭胜(Riansin)
 * @LastEditors: 尉旭胜(Riansin)
 */
import React from 'react'
import ScrollBar from "../../components/scrollBar";
// import ArtNav from '../../components/artnav';
import Head from 'next/head';

export default class blogIndex extends React.Component{
    
    render() {
        return (
            <>
                <Head>
                    <title>Riansin</title>
                </Head>
                <ScrollBar />
                {/* <div className='blog-index-box'>
                    <ArtNav />
                    <div className='blog-index-body'>
                        <div className='blog-index-body-left'>

                        </div>
                        <div className='blog-index-body-right'>

                        </div>
                    </div>
                    <div className='blog-index-fonter'>
                        
                    </div>
                </div> */}
                <div className='mianshi'>
                    找工作期间，先暂停一下！
                </div>
            </>
        )
    }
}