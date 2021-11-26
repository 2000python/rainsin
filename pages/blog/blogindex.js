import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import ScrollBar from "../../components/scrollBar";
import ArtNav from '../../components/artnav';
import Head from 'next/head';
import Mouse from '../../components/mouse';
import { Affix, Row, Col, Breadcrumb } from 'antd';
import {HomeOutlined} from '@ant-design/icons'

const ThemeContext = React.createContext('light');

export default function BlogIndex() {
    const [boxClass, useBoxclass] = useState({
        coverBgClass: "",
    });
    const [getSection, setGetsection] = useState(1);
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
    const ChangeBg = (e) => {
        useBoxclass({
            coverBgClass:'cover-background-section'
        })
        if (e.target.firstChild.nodeType === 1) {
            e.target.firstChild.className = `cover-background-hide ${boxClass.coverBgClass}`
        } else { 
            e.target.previousSibling.className = `cover-background-hide ${boxClass.coverBgClass}`
        }
    }
    const RecoverBg = (e) => {
        useBoxclass({
            coverBgClass:''
        })
        if (e.target.firstChild.nodeType === 1) {
            e.target.firstChild.className = `cover-background-hide`
        } else {
            e.target.previousSibling.className = `cover-background-hide`
        }
    }
    return (
            <ThemeContext.Provider value='drak'>
            <>
                <Head>
                    <title>Apple trees｜{ 'Laest'} (Rainsin)</title>
                </Head>
                
                <ScrollBar />

                <div className='blog-index-box'>
                    <ArtNav />
                    <div className='blog-index-body'>
                        <Row>
                            <Col flex={0.01} xs={0} sm={0} md={0} lg={8} xl={8}>
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
                                                            
                                                                {/* <a className='affix-left-box-catalog-a' onMouseMove={ChangeBg} onMouseLeave={RecoverBg}>    
                                                                    <div className='cover-background-hide '>

                                                                    </div>
                                                                    <span>{data.content}</span>

                                                                </a> */}
                                                            <ItemBox content={data.content}
                                                                data={data.key}
                                                                classBgName={1}
                                                                markClass={'aside-item'}
                                                                getSectionValue={(num) => {
                                                                        setGetsection(num);
                                                                }}
                                                                SectionValue={getSection}
                                                                />

                                                        </li>
                                                    )
                                                })}
                                                </ul>
                                            </div>
                                        </div>
                                    </Affix>
                                </div>
                            </Col>
                            <Col flex={1} xs={24} sm={24} md={24} lg={22} xl={24}>
                                <div className='blog-index-body-right'>
                                    <div className='blog-index-body-right-box'>
                                        <div className='word-daily'>
                                            <Breadcrumb>
                                                <Breadcrumb.Item>
                                                    <HomeOutlined/>
                                                </Breadcrumb.Item>
                                            </Breadcrumb>
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
                                        <Pagination total={ lastData}/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
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
// data:标识每个ITEM的序号，可以用它做许多事情  content:ITEM的内容  markClass：标记类名 outerwidht：外层盒子宽度  outerheight:外层盒子高度  coverleft:遮罩位置 coverwidht/height：遮罩原始宽高 dispaly：组件布局行为 margin：组件外边距 
function ItemBox(props) {
    const [boxClass, useBoxclass] = useState({
        coverBgClass: "",
    });
    const sectionV = props.data;

    const ChangeBg = (e) => {
        useBoxclass({
            coverBgClass:`cover-background-section-${props.classBgName}`
        })
        const obj = document.getElementsByClassName(props.markClass);
        if (obj[sectionV - 1].dataset.state === 'notchosen') {
            if (e.target.firstChild.nodeType === 1) {
                e.target.firstChild.className = `cover-background-hide ${boxClass.coverBgClass}`
                
            } else {
                e.target.previousSibling.className = `cover-background-hide ${boxClass.coverBgClass}`
            }
            obj[sectionV - 1].style.color = 'white'
        }
        
    }
    
    const RecoverBg = (e) => {
        useBoxclass({
            coverBgClass: ''
        })
        const obj = document.getElementsByClassName(props.markClass);
        if (obj[sectionV - 1].dataset.state === 'notchosen'){
            if (e.target.firstChild.nodeType === 1) {
                e.target.firstChild.className = `cover-background-hide`
            } else {
                e.target.previousSibling.className = `cover-background-hide`
            }
            obj[sectionV - 1].style.color = 'rgb(39,39,39)'
    }
    }
    useEffect(() => {
        // 默认选择项
        const obj = document.getElementsByClassName(props.markClass);
        obj[0].style.color = 'white';
        obj[0].firstChild.className = 'cover-background-hide cover-background-section-1';
        obj[0].dataset.state = 'state'
        // 第二个参数[]使得hook在加载后只执行一次
    },[])
    const sectionDiv = (e) => {
        useBoxclass({
            coverBgClass:`cover-background-section-${props.classBgName}`
        })
        // 将点击元素的序号记录下来，在点击下一个元素后方便恢复样式
        props.getSectionValue(parseInt(e.target.attributes[0].nodeValue));
        
        const obj = document.getElementsByClassName(props.markClass);
        
        // SectionValue记录上次选择的元素 恢复上次点击元素的样式
        if (sectionV !== props.SectionValue) {
            obj[sectionV - 1].style.color = 'white';
            obj[sectionV - 1].dataset.state = 'state';

            obj[props.SectionValue - 1].style.color = 'rgb(39,39,39)';
            obj[props.SectionValue - 1].firstChild.className = `cover-background-hide`;
            obj[props.SectionValue - 1].dataset.state = 'notchosen';
            
            if (e.target.firstChild.nodeType == 1) {
                e.target.firstChild.className = `cover-background-hide ${boxClass.coverBgClass}`
            } else { 
                e.target.previousSibling.className = `cover-background-hide ${boxClass.coverBgClass}`
            }
        }
        // 判断点击元素的类型 改变点击元素的样式
        
    }
    
    return(
        <>
            <Link href='#'>
                <a data-id={props.data} data-state={'notchosen'} className={`theme-box-item-a ${props.markClass}`} title={props.content} onMouseMove={ChangeBg} onMouseLeave={RecoverBg} onClick={sectionDiv} style={{ width: `${props.outerwidth}px`,display:`${props.display}`,margin:`${props.margin}`}} >
                <div className='cover-background-hide ' style={{ left: `${props.coverleft}%`, width: `${props.coverwidth}px`, height:`${props.coverheight}px`,borderRadius:`${props.coverwidth / 2}`}}>

                </div>
                <span data-id={props.data}>{props.content}</span>

                </a>
                </Link>
         </>
    )
}

function Pagination(props) {
    const [getSection, setGetsection] = useState(1);
    return (
        <ul className='blog-index-body-right-indexlist-pagin'>
            {props.total.map((data) => 
                <ItemBox key={data.key}
                    data={data.key}
                    content={data.key}
                    outerwidth={40}
                    coverleft={50}
                    coverheight={1}
                    coverwidth={1}
                    classBgName={2}
                    display={'inline-block'}
                    margin={'0 7px 0 7px'}
                    markClass={'pagi-item'}
                    getSectionValue={(num) => {
                        setGetsection(num);
                    }}
                    SectionValue={getSection}
                    />
            )}
            </ul>
    )
}