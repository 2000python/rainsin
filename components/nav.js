/*
 * @Author: 尉旭胜(Riansin)
 * @LastEditors: 尉旭胜(Riansin)
 */
/*
 *                   江城子 . 程序员之歌
 * 
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 * 
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 * 
 */

/*
 * @Author: 尉旭胜（Rainsin）
 * @Date: 2021-08-06 22:34:48
 * @LastEditTime: 2021-08-09 16:52:07
 * @LastEditors: 尉旭胜（Rainsin）
 * @FilePath: /react-blog/blog/components/nav.js
 */
import React from 'react';
import Link from 'next/link'
import Image from 'next/dist/client/image';
import { Drawer } from 'antd'
import { UpCircleOutlined } from '@ant-design/icons'
import { antiShake } from './commonAPI';

// function Nav(props) {
//     const [orient, setOrient] = useState(-90), [show, setShow] = useState(false),[isWebsiteShow,setWebsiteShow] = useState('0');
    
//     const local = useScroll();
//     // 整体高度
//     let renderNavValue, renderAValue, renderAfontsize,closeShow,changeOrient,websiteOpen,websiteClose;
    
//     if (props.isShow === false) {
//         if (local.top < 70) {
//             renderNavValue = 'nav-top'
//             renderAValue = 'a-linehight2'
//             renderAfontsize = 'a-font-middle-size2'
//         } else {
//             renderNavValue = 'nav-box'
//             renderAValue = 'a-linehight1'
//             renderAfontsize = 'a-font-middle-size1'
//         }
        
//     } else {
//         renderNavValue = 'nav-box'
//             renderAValue = 'a-linehight1'
//             renderAfontsize = 'a-font-middle-size1'
//     }
//     // 导航栏右边图标的旋转角度、抽屉可见性
//     changeOrient = () => {
//         if (orient == -90) {
//             setOrient(90)
//         }
//         setShow(true)
//     }
//     closeShow = () => {
//         setShow(false);
//         setOrient(-90)
//     }
//     // 导航栏website页面的可见性
//     websiteOpen = () => {
//         setWebsiteShow('1')
//         useEffect(() => {
//             document.getElementsByTagName('video').play();
//         })
//     }
//     websiteClose = () => {
//         setWebsiteShow('0')
//         useEffect(() => {
//             document.getElementsByTagName('video').pause();
//         })
//     }
    

//     return (
//             <>
//             <nav className={'nav '+renderNavValue} >
//                 <div className='nav-down-align'>
//                     <div className='inner'>
//                         <div className='left-nav-box'>
//                             <ul>
//                             <li className="cursor-section"><Link href='http://t42005718h.wicp.vip/' ><a className={renderAValue} >Article</a></Link></li>
//                             <li className="cursor-section"><Link href='/'><a  className={renderAValue}>Pages</a></Link></li>
//                                 <li className="cursor-section" onMouseMove={websiteOpen} onMouseLeave={websiteClose} style={{cursor:'pointer'}}><Link href='/'><a className={renderAValue} >Website</a></Link></li>
//                             </ul>                           
//                         </div>
//                         <div className='middle-nav-box'>
//                             <a href='#' className={renderAValue+' '+renderAfontsize}>APPLE TRUE</a>
                            
//                          </div>
//                         <div className='right-nav-box'>
//                         {/* <svg t="1628933548761" className="nav-right-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1641" width="200" height="200"><path d="M138.666667 138.666667m128 0l85.333333 0q128 0 128 128l0 85.333333q0 128-128 128l-85.333333 0q-128 0-128-128l0-85.333333q0-128 128-128Z" fill="#09183F" p-id="1642"></path><path d="M138.666667 544m128 0l85.333333 0q128 0 128 128l0 85.333333q0 128-128 128l-85.333333 0q-128 0-128-128l0-85.333333q0-128 128-128Z" fill="#BEC1C8" p-id="1643"></path><path d="M544 138.666667m128 0l85.333333 0q128 0 128 128l0 85.333333q0 128-128 128l-85.333333 0q-128 0-128-128l0-85.333333q0-128 128-128Z" fill="#BEC1C8" p-id="1644"></path><path d="M544 544m128 0l85.333333 0q128 0 128 128l0 85.333333q0 128-128 128l-85.333333 0q-128 0-128-128l0-85.333333q0-128 128-128Z" fill="#09183F" p-id="1645"></path></svg> */}
//                             <UpCircleOutlined spin={false} className={'nav-right-icon ' + renderAValue} rotate={orient} onClick={changeOrient} style={{ fontSize: '30px', color: '#000', transition: 'all .5s' }} />
                            
//                          </div>
//                     </div>
//                 </div>
//                 <div className='website' style={{ opacity:isWebsiteShow}}>
//                     <div className='website-box'>
//                         <div className='left-website-box web-flex'>
//                             <video className='website-video' src='https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/%E6%88%91%E7%9A%84%E5%BD%B1%E7%89%87.mov' autoPlay={true} loop={true} controls></video>
//                         </div>
//                         <div className='right-website-box web-flex'>

//                         </div>
//                     </div>
//                 </div>
//             </nav>
            
//                 <div className='showDrawer'>
//                     <Drawer title="Two-level Drawer" width={760} closable={true} onClose={closeShow} visible={show} placement='right' zIndex={4} getContainer={false} style={{ position: 'absolute' }}>
                        
//                     </Drawer>
//                 </div>
//             </>
//         )
// }
    


class Nav extends React.Component{
    
    state = {
        top: 0,
        orient: -90,
        show: false,
        isWebsiteShow: '0',
        display: 'none',
        renderNavValue :'nav-top',
        renderAValue :'a-linehight2',
        renderAfontsize :'a-font-middle-size2',
    }
    
    // 整体高度
    componentDidMount() {
        window.addEventListener('scroll', antiShake(() => {
            this.setState({
                top: document.documentElement.scrollTop,
            })
            if (this.state.top < 70) {
                this.setState({
                    renderNavValue :'nav-top',
                    renderAValue :'a-linehight2',
                    renderAfontsize :'a-font-middle-size2',
                })
                
        } else {
                this.setState({
                    renderNavValue : 'nav-box',
                    renderAValue : 'a-linehight1',
                    renderAfontsize : 'a-font-middle-size1',
                })   
        }      
        }, 5));
        
    }
    
    
    // 导航栏右边图标的旋转角度、抽屉可见性
    changeOrient = () => {
        if (this.state.orient == -90) {
            this.setState({
                orient: 90
            })
            
        }
        this.setState({
            show: true
        })
    }
    closeShow = () => {
        this.setState({
            show: false
        })
        this.setState({
            orient: -90
        })
    }
    // 导航栏website页面的可见性
    websiteOpen = () => {
        const video = Array.from(document.getElementsByTagName('video'));
        this.setState({
            isWebsiteShow: '1',

        });
        video[0].play()
    }
    websiteClose = () => {
        const video = Array.from(document.getElementsByTagName('video'));
        this.setState({
            isWebsiteShow: '0',
        });
        video[0].pause()
    }
    
    render() {
        
        return (
            <>
            <nav className={'nav '+this.state.renderNavValue} onMouseLeave={this.websiteClose} >
                <div className='nav-down-align'>
                    <div className='inner'>
                        <div className='left-nav-box'>
                            <ul>
                            <li className="cursor-section"><Link href='http://t42005718h.wicp.vip/' ><a className={this.state.renderAValue} >Article</a></Link></li>
                            <li className="cursor-section"><Link href='/'><a  className={this.state.renderAValue}>Pages</a></Link></li>
                                <li className="cursor-section" onClick={this.websiteOpen}  style={{cursor:'pointer'}}><Link href='/'><a className={this.state.renderAValue} >Website</a></Link></li>
                            </ul>                           
                        </div>
                        <div className='middle-nav-box'>
                            <a href='#' className={this.state.renderAValue+' '+this.state.renderAfontsize}>APPLE TREES</a>
                            
                         </div>
                        <div className='right-nav-box'>
                        {/* <svg t="1628933548761" className="nav-right-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1641" width="200" height="200"><path d="M138.666667 138.666667m128 0l85.333333 0q128 0 128 128l0 85.333333q0 128-128 128l-85.333333 0q-128 0-128-128l0-85.333333q0-128 128-128Z" fill="#09183F" p-id="1642"></path><path d="M138.666667 544m128 0l85.333333 0q128 0 128 128l0 85.333333q0 128-128 128l-85.333333 0q-128 0-128-128l0-85.333333q0-128 128-128Z" fill="#BEC1C8" p-id="1643"></path><path d="M544 138.666667m128 0l85.333333 0q128 0 128 128l0 85.333333q0 128-128 128l-85.333333 0q-128 0-128-128l0-85.333333q0-128 128-128Z" fill="#BEC1C8" p-id="1644"></path><path d="M544 544m128 0l85.333333 0q128 0 128 128l0 85.333333q0 128-128 128l-85.333333 0q-128 0-128-128l0-85.333333q0-128 128-128Z" fill="#09183F" p-id="1645"></path></svg> */}
                            <UpCircleOutlined spin={false} className={'nav-right-icon ' + this.state.renderAValue} rotate={this.state.orient} onClick={this.changeOrient} style={{ fontSize: '30px', color: '#000', transition: 'all .5s' }} />
                            
                         </div>
                    </div>
                </div>
                <div className='website' style={{ opacity:this.state.isWebsiteShow}}>
                    <div className='website-box'>
                        <div className='left-website-box web-flex'>
                            <video className='website-video' src='/我的影片.mov'  loop={true}></video>
                        </div>
                            <div className='right-website-box web-flex'>
                                <div className='r-web-content-box'>
                                    <h1>Apple Trees</h1>
                                    We were on this car trip.
                                    <br/>
                                    And I was looking at these rows and rows of trees all along the highway.
                                    <br/>
                                    I don't know what kind of trees, apples or something.
                                    <br/>
                                    There were just like thousands and thousands of rows of a thousand trees each.
                                    <br/>
                                    And I picked one tree that I could see about eight trees back in this one row in the middle.
                                    <br/>
                                    Just one in a billion.
                                    <br/>
                                    And that's how I felt.
                                    <br />
                                    <span>
                                       该站点由个人维护，如有侵权请告知删除@mail：2000python@gmail.com 
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
                <div className='showDrawer'>
                    <Drawer title="莫听穿林打叶声，何妨吟啸且徐行。" width={760} closable={true} onClose={this.closeShow} visible={this.state.show} placement='right' zIndex={4} getContainer={false} style={{ position: 'absolute' }}>
                        <div className='nav-drawer-img'>
                            <Image src='https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/img/IU.gif' layout='fill' alt='IU'></Image>
                        </div>
                    </Drawer>
                </div>
            </>
        )
    }
    
}

 export default Nav 