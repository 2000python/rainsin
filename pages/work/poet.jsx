/*
 * @Author: 尉旭胜(Riansin)
 * @LastEditors: 尉旭胜(Riansin)
 */
import React from "react";
import Head from 'next/head'
import Link from "next/link";
import ScrollBar from '../../components/scrollBar'

export default class Poetry extends React.Component{
    componentDidMount() {

        console.log(this.props);
        
    }
    render() {
        return (
            <>
                <Head>
                    <title>诗词库</title>
                </Head>
                <ScrollBar/>
                <nav className='poet-nav'>
                    <div className='poet-left-nav-box'>
                        <Link href='/'><a>诗词库</a></Link>
                        
                    </div>
                    <div className='poet-right-nav-box'>
                        <div className='poet-right-nav-item-logo'>

                        </div>
                        <ul className='poet-right-nav-item-box'>
                            <li><Link href='#?id=1'><a className='shake'>首页</a></Link></li>
                            <li><Link href='#'><a>诗词</a></Link></li>
                            <li><Link href='#'><a>元曲</a></Link></li>
                            <li><Link href='#'><a>古籍</a></Link></li>
                            <li><Link href='#'><a>楚辞</a></Link></li>
                            <li><Link href='#'><a>字帖</a></Link></li>
                            <li><Link href='#'><a>妙染</a></Link></li>
                        </ul>
                    </div>
                </nav>
                <div className='poet-banner-box'>
                    <div className='poet-banner-left'>
                        <div className='poet-cover-line'>
                            
                        </div>
                        <video className='poet-video' controls={true} src='/zhangzd.mp4' loop={true}></video>
                        <div className='poet-banner-left-scroll-left'></div>
                        <div className='poet-banner-left-scroll-right'>
                           <span className='poet-banner-scoll'>滚动</span>
                        </div>
                    </div>
                    <div className='poet-banner-right'>
                        <div className='poet-banner-right-top'>
                            <span className='poet-banner-right-top-item'>张择端</span>
                            <br />
                            <span></span>
                            <br />
                            <span></span>
                            <br />
                            <span></span>
                        </div>
                        <div className='poet-banner-right-buttom'>
                            
                        </div>
                    </div>
                </div>
                <span className='poet-logo-big'>
                    詩書礼仪
                </span>
                <div className='poetry-box'>
                    <div className='poet-center-box'>
                        
                    {/* {
                        this.props.posts.data.map((res, index) => (
                            <ul key={index} className='poet-cont-box'>
                                <h1>{ res.title}</h1>
                                {res.content.map((r, ContentIndex) => (<li key={res.title+ContentIndex}> {r}</li>))}
                            </ul>
                        ))
                    } */}
                    </div> 
                </div>
                <div className='poet-index-content-box'>
                    <div className='poet-index-content-list-box'>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

// export async function getStaticProps(context) {
//     // const res = await fetch('http://127.0.0.1:7001/')
//     const res = await fetch(`https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/poet-database/${ context.query.tag}.json`)
//     const posts = await res.json()
//     return {
//       props: {
//         posts,
//       },
//     }
// }
