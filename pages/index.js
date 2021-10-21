/*
 * @Author: 尉旭胜(Riansin)
 * @LastEditors: 尉旭胜(Riansin)
 */
/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑       永不宕机     永无BUG
 * 
 *        佛曰:  
 *                写字楼里写字间，写字间里程序员；  
 *                程序人员写程序，又拿程序换酒钱。  
 *                酒醒只在网上坐，酒醉还来网下眠；  
 *                酒醉酒醒日复日，网上网下年复年。  
 *                但愿老死电脑间，不愿鞠躬老板前；  
 *                奔驰宝马贵者趣，公交自行程序员。  
 *                别人笑我忒疯癫，我笑自己命太贱；  
 *                不见满街漂亮妹，哪个归得程序员？
 */

/*
 * @Author: 尉旭胜（Rainsin）
 * @Date: 2021-08-06 19:06:37
 * @LastEditTime: 2021-08-09 16:17:59
 * @Description: 尉旭胜（Rainsin）
 * @FilePath: /react-blog/blog/pages/index.js
 */
import React,{useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router,{ useRouter } from 'next/router'
import Image from 'next/image'
import Nav from '../components/nav'
import { RightOutlined } from '@ant-design/icons';
import {Drawer,BackTop} from 'antd'
import 'antd/dist/antd.css';
import img from '../public/78544.jpg'
import Mouse from '../components/mouse'
import Loading from './api/loading'
import ScrollBar from "../components/scrollBar";
// import dynamic from 'next/dynamic'

// const PubSub = dynamic(import('pubsub-js'),{ssr:false})
class Banner extends React.Component{
  render() {
    return (
      <div>
      <div className='banner-img'>
        <div className='b-img-box'>
        <Image src='https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/img/11.jpg' className='banner-image' alt='img' layout='fill'></Image>
        </div>           
        </div>
      </div>  
    )
  }
}
function BannerText() {
  return (

      <div className='banner-t-box'>
    <div className='banner-text'>
          <span>QUIET </span>
          <br />
        <span>STORY</span>
        <br />
          <span>FOR YOUR</span>
          <br />
          <span>LIFE</span>
       
      </div>
      <div className='b-t-miss'>
          尉旭胜(Rainsin)的博客
          <br />
          分享我的技术心得和快乐,
      </div>
      <div className='b-t-design'>Design by Rainsin</div>
      <div></div>
      </div>
  )
}

class LatestInfo extends React.Component{

  state = {
    time: '2021.8.17',
    item: '服务端渲染框架',
    tag: 'CSS'
  }
  render() {
    return (
      <section className='latest-box'>
        <div className='latest-bg-box'>
        <div className='li-nav'>
          <span className='li-item'>LATEST INFO</span>
          <br />
            <span className='li-con'>最新资讯</span>
            
        </div>
        <div className='li-cot-box'>
          <ul className='li-content'>
              <li className='big-li-cot-box'>
                <div className='li-cot-item-box'>
                  <Link href='/art/yumao'>
                  <a style={{backgroundImage:'url(https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/img/%E5%9B%9B%E5%A4%A7%E5%A4%A9%E7%8E%8B.png)'}}>
                     
                    </a>
                    </Link>
                  <span className='li-cot-time'>2021.10.30</span>
                  <span className='li-cot-item'>羽毛球技术要点（个人观点）</span>
                  <span className='li-cot-tag'>{ this.state.tag}</span>
                  
                </div>
                <div className='li-cot-blog-link'></div>
                <Link href='#'>
                  <a className='li-cot-blog-art' href='#'>
              
                  </a>
                </Link>
            </li>
              <li>
                <div className='li-cot-item-box middle'>
                  <Link href='#'>
                  <a href='#'>
                     
                  </a>
                  </Link>
                  <span className='li-cot-time'>2021.8.17</span>
                  <span className='li-cot-item'>服务端渲染框架</span>
                  <span className='li-cot-tag'>technology</span>
                  
                </div>
                <div className='li-cot-item-box middle'>
                  <a href='#' >
                     
                  </a>
                  <span className='li-cot-time'>2021.8.17</span>
                  <span className='li-cot-item'>服务端渲染框架</span>
                  <span className='li-cot-tag'>technology</span>
                  
                </div>
            </li>
              <li>
              <div className='li-cot-item-box middle'>
                  <a href='#' >
                     
                  </a>
                  <span className='li-cot-time'>2021.8.17</span>
                  <span className='li-cot-item'>服务端渲染框架</span>
                  <span className='li-cot-tag'>technology</span>
                  
                </div>
                <div className='li-cot-item-box middle'>
                  <a href='#' >
                     
                  </a>
                  <span className='li-cot-time'>2021.8.17</span>
                  <span className='li-cot-item'>服务端渲染框架</span>
                  <span className='li-cot-tag'>technology</span>
                  
                </div>
            </li>
          </ul>
          </div>
          </div>
      </section>
    )
  }
}
function WorkPages() {
  const [change, setChange] = useState({
    item1: '',
    item2: '',
    item3: ''
  });
  const backgroundChange = (id) => {
    const itemChange = 'item' + id;
    setChange({
      [itemChange]:'backgroundChange'
    })
    }
const backgroundAlter = (id) => {
  const itemChange = 'item' + id;
  setChange({
    [itemChange]:''
  })
    
}
  return (
    <section className='pages'>
      <div className='page-box'>
      <nav className='page-nav-box'>
        <span className='left-page-nav'>
          <span >PAGES</span>
          <br />
          <span>资源分享</span>
        </span>
        <span className='right-page-nav'>
            <ul>
              <li><a href='#' title='我收集的资源，法帖。'>RECOUR</a></li>
              <li><a href='#' title='诗词库'>POETRY</a></li>
              <li><a href='#' title='我喜欢的一部番。'>CLANNAD</a></li>
          </ul>
        </span>
      </nav>
        <div className='page-content-box' >
          <div className='page-cont-bg-img'>
          </div>
          <div className='page-cont-lang-box'>
            <div className='page-cont-item w1'>
              <Link href='#'>
                <a className='item' onMouseOver={()=>backgroundChange(1)} onMouseOut={()=>backgroundAlter(1)}>
                  <div className={'item-top-bg '+ change.item1}></div>
                  <div className='item-buttom'>
                    <div className='item-buttom-content-box'>
                      <h1>CLANNAD-クラナド</h1>
                      <span className='key'>Key</span>
                      <span className='intro'>没有豪言壮语，没有伟人语录，只有一个个平常人就会有的情感——爱情、亲情、友情所组成的故事。</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className='page-cont-item w2'>
            <Link href='#'>
                <a className='item' onMouseOver={()=>backgroundChange(2)} onMouseOut={()=>backgroundAlter(2)}>
                  <div className={'item-top-bg '+change.item2} ></div>
                  <div className='item-buttom'>
                  <div className='item-buttom-content-box'>
                      <h1>CLANNAD-クラナド</h1>
                      <span className='key'>Key</span>
                      <span className='intro'>没有豪言壮语，没有伟人语录，只有一个个平常人就会有的情感——爱情、亲情、友情所组成的故事。</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className='page-cont-item w3'>
            <Link href={{pathname:'/work/poet',query:{tag:'shijing'}}} >
                <a className='item' onMouseOver={()=>backgroundChange(3)} onMouseOut={()=>backgroundAlter(3)}>
                  <div className={'item-top-bg ' + change.item3} style={{ backgroundImage: 'url(https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/img/%E6%80%9D%E8%AF%97.jpeg)' }}></div>
                  <div className='item-buttom'>
                  <div className='item-buttom-content-box'>
                      <h1>诗词库</h1>
                      <span className='key'>Rainsin</span>
                      <span className='intro'>莫听穿林打叶声，何妨吟啸且徐行。<br/>竹杖芒鞋轻胜马，谁怕？<br/>一蓑烟雨任平生。</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className='page-cont-item w4'></div>
          </div>
        </div>
        </div>
    </section>
  )
}
function Footer() {
  const [showDrawer, setshowDrawer] = useState({
    wechatShow: false,
    flychatShow: false,
    twitterShow: false,
    githubShow: false,
  });
  // 显示页脚抽屉
  const DrawerShow = {
    wechatDrawer: () => {
      setshowDrawer({ wechatShow: true });
    },
    flychatDrawer: () => {
      setshowDrawer({ flychatShow: true });
    },
    twitterDrawer: () => {
      setshowDrawer({ twitterShow: true });
    },
    githubDrawer: () => {
      setshowDrawer({ githubShow: true });
    },
  };
  // 关闭页脚抽屉
  const DrawerClose = {
    wechatClose: () => {
      setshowDrawer({ wechatShow: false });
    },
    flychatClose: () => {
      setshowDrawer({ flychatShow: false });
    },
    twitterClose: () => {
      setshowDrawer({ twitterShow: false });
    },
    githubClose: () => {
      setshowDrawer({ githubShow: false });
    },
  };
  return (
    <footer className='footer'>
      <div className='footer-box'>
        <div className='footer-content-top'>
          <div className='footer-content-top-leftbox'>
            <div className='footer-content-top-leftbox-1part'>
              <div className='footer-content-top-leftbox-part-header'>
                MODULE
              </div>
              <div className='footer-content-top-leftbox-part-item'>
                <Link href='#'>
                  <a className='footer-Article'>
                <span className='footer-common'>
                      <RightOutlined style={{ fontSize: '10px', color: 'rgb(95,86,71)', margin:'0 .7rem 0 0'}}/>
                  Article
                </span>
                </a>
                </Link>
                <Link href='#'>
                  <a className='footer-Article'>
                <span className='footer-pages footer-common'>
                  <RightOutlined style={{fontSize:'10px',color:'rgb(95,86,71)', margin: '0 .7rem 0 0'}}/>
                  Pages
                </span>
                </a>
                </Link>
              </div>
            </div>
            <div className='footer-content-top-leftbox-2part'>
            <div className='footer-content-top-leftbox-part-header'>
                LINK
              </div>
              <div className='footer-content-top-leftbox-part-item'>
                <Link href='#'>
                  <a className='footer-Article'>
                <span className='footer-common'>
                      <RightOutlined style={{ fontSize: '10px', color: 'rgb(95,86,71)', margin:'0 .7rem 0 0'}}/>
                  Article
                </span>
                </a>
                </Link>
                <Link href='#'>
                  <a className='footer-Article'>
                <span className='footer-pages footer-common'>
                  <RightOutlined style={{fontSize:'10px',color:'rgb(95,86,71)', margin: '0 .7rem 0 0'}}/>
                  Pages
                </span>
                </a>
                </Link>
              </div>
            </div>
            <div className='footer-content-top-leftbox-3part'>
            <div className='footer-content-top-leftbox-part-header'>
                ABOUT
              </div>
              <div className='footer-content-top-leftbox-part-item'>
                <Link href='#'>
                  <a className='footer-Article'>
                <span className='footer-common'>
                      <RightOutlined style={{ fontSize: '10px', color: 'rgb(95,86,71)', margin:'0 .7rem 0 0'}}/>
                  About Me
                </span>
                </a>
                </Link>
                <Link href='#'>
                  <a className='footer-Article'>
                <span className='footer-pages footer-common'>
                  <RightOutlined style={{fontSize:'10px',color:'rgb(95,86,71)', margin: '0 .7rem 0 0'}}/>
                  About Website
                </span>
                </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='footer-content-top-rightbox'>
            <div className='e-mail-rel'>
              <div className='top'>
                <span>RAINSIN BLOG</span>
              </div>
              <div className='middle'>
                <span>Apple Tree</span>
                <br/>
                <span>QQ.1820278582</span>
                <br/>
                <span>mail.xu.tiamoni@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-content-buttom'>
          <div className='footer-content-buttom-left'>
            <span>©️  </span>
            <span>2021  </span>
            <span>RAINSIN</span>
            <br />
            <span>All Rights Reserved.</span>
          </div>
          <div className='footer-content-buttom-right'>
            <div className='perch'></div>
            <div className='wechat' onClick={DrawerShow.wechatDrawer}>
              <div className='cursor-section wechat-img'>
                <Image className='iconfont' src='https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/img/wechat.svg' alt='wechat' layout='fill'/>
              </div>
            </div>
            <div className='flychat' onClick={DrawerShow.flychatDrawer}>
            <div className='cursor-section wechat-img'>
              <Image className='iconfont' src='https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/img/telegram.svg' alt='wechat' layout='fill'/>
              </div>
            </div>
            <div className='twitter' onClick={DrawerShow.twitterDrawer}>
            <div className='cursor-section wechat-img'>
              <Image className='iconfont' src='https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/img/twitter.svg' alt='wechat' layout='fill'/>
              </div>
            </div>
            <div className=' github' onClick={DrawerShow.githubDrawer}>
            <div className='wechat-img cursor-section'>
              <Image className='iconfont' src='https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/img/github.svg' alt='wechat' layout='fill'/>
              </div>
            </div>
            <div className='goUp'>
            </div>
          </div>
        </div>
      </div>
      <div className='wechatDrawer'>
        <Drawer title="我的微信，欢迎击剑🤺。" width={600} closable={true} onClose={DrawerClose.wechatClose} visible={showDrawer.wechatShow} placement='right'>
          <div className='contactQR wechatQR'>

          </div>
        </Drawer>
        <Drawer title="我的tg，欢迎击剑🤺。" width={600} closable={true} onClose={DrawerClose.flychatClose} visible={showDrawer.flychatShow} placement='right'>
        <div className='contactQR tgQR'>
        </div>
        </Drawer>
        <Drawer title="我的推特，欢迎击剑🤺。" width={600} closable={true} onClose={DrawerClose.twitterClose} visible={showDrawer.twitterShow} placement='right'>
        <div className='contactQR twitterQR'>
        </div>
        </Drawer>
        <Drawer title="我的GITHUB，欢迎击剑🤺。" width={600} closable={true} onClose={DrawerClose.githubClose} visible={showDrawer.githubShow} placement='right'>
          <div className='github'>
            
          </div>
        </Drawer>
      </div>
    </footer>
  )
}
class BackUp extends React.Component{
  render() {
    return (
      <BackTop visibilityHeight={2400} style={{bottom:'10vh',zIndex:'3'}}>
            <a className='goup-img cursor-section' href='#' >
              <Image id='cursor-section' className='cursor-section iconfont' src='https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/img/direction-up.svg' alt='wechat' layout='fill'/>
            </a>
      </BackTop>
    )
  }
}
// 首页
class IndexPage extends React.Component{
  render() {
    return (
      <>
      <Banner />
      <BannerText />
      <LatestInfo />
      <WorkPages />
    </>
    )
  }
}

export default class Home extends React.Component{
  state = {
    // 是否显示加载页面
    loadingShow: true,
    // 导航组件的高度变化
    isShow: false,
    
  }
  componentDidMount() {
    // 首屏加载计时
    setTimeout(() => { this.setState({ loadingShow: false }) }, 1500);
    }
    changeNavShow = (boll) => {
      this.setState({
        isShow: boll
      });
    
    }
    render() {
    
      return (
        <>
          <Head>
            <title>Apple tree - 尉旭胜(rainsin)的博客。</title>
          </Head>
          <ScrollBar/>
          <Loading loading={this.state.loadingShow} />
          <Nav isShow={this.state.isShow} />
          <IndexPage />
          {/* <Article1 changeNav={ this.changeNavShow}/> */}
          <BackUp />
          <Footer />
          <Mouse  />
        </>
      )
    }
  }
