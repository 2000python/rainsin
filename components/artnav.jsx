/*
 * @Author: 尉旭胜(Riansin)
 * @LastEditors: 尉旭胜(Riansin)
 */
import React from "react";
import Link from 'next/link';
import {Row,Col} from 'antd'
export default function ArtNav(props){
    // const [styleChildren, setChildren] = useState(
    //             <>
    //                 <span className={'blog-index-nav-right-wind-up-line '+ boxClass.UpLineBefore}></span>
    //                 <span className={'blog-index-nav-right-wind-down-line ' + boxClass.DownLineBefore}></span>
    //             </>
    // )
    
    // 鼠标经过时改变nav右边图标
    
    return (
        <div className='blog-index-nav'>
            <Row>
                <Col xs={0} sm={0} md={0} lg={12} xl={12}>
                    <div className='blog-index-nav-left'>
                        <div className='blog-index-nav-left-icon'>
                            
                        </div>
                        <Link href='#'>
                            <a className='blog-index-nav-left-item'>
                                Apple Trees
                            </a>
                        </Link>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={0} lg={0} xl={12}>
                    <div className='blog-index-nav-right'>
                        <RightIcon iswind={ props.iswind}/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

class RightIcon extends React.Component {
    state = {
        UpLineBefore: '',
        DownLineBefore: '',
        BoxWind: 'blog-index-nav-right-unwind',
        isWindHide: 'ishide',
        isUnWindHide: '',
        selectionClass: 'selectionBefore',
        selectionIndex: -1,
        overIndex:0,
    }
    data = [
        {
            key:1,
            item: "Technology"
        },
        {
            key:2,
            item: "Live"
        },
        {
            key:3,
            item:"Resource"
        },
        {
            key:4,
            item:"Skill"
        },
        {
            key:5,
            item:"MyResume"
        }
    ]
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const x = document.documentElement.scrollTop;
            if (x > 150) {
                this.setState({
                    isWindHide: '',
                    isUnWindHide: 'ishide',
                    BoxWind: 'blog-index-nav-right-wind'
                })
            } else {
                this.setState({
                    isWindHide: 'ishide',
                    isUnWindHide: '',
                    BoxWind: 'blog-index-nav-right-unwind'
                })
            }
        })
        // window.onscroll = () => {
        //     const x = document.documentElement.scrollTop;
        //     if (x > 150) {
        //         this.setState({
        //             isWindHide: '',
        //             isUnWindHide: 'ishide',
        //             BoxWind: 'blog-index-nav-right-wind'
        //         })
        //     } else {
        //         this.setState({
        //             isWindHide: 'ishide',
        //             isUnWindHide: '',
        //             BoxWind: 'blog-index-nav-right-unwind'
        //         })
        //     }
        // }
    }
    changeWind = (e) => {
        e.preventDefault();
        this.setState({
            UpLineBefore: 'top-wind-move',
            DownLineBefore: 'down-wind-move'
        })
    };
    changeSpan = (e) => {
        e.preventDefault();
        this.setState({
            UpLineBefore: 'top-wind-out',
            DownLineBefore: 'down-wind-out'
        });
    }
    gotobigtag = (e) => {
        const alltarget = document.getElementsByClassName('blog-mark-nav-item');
        if (this.state.selectionIndex === -1) {
            alltarget[e.target.dataset.id].className = 'blog-mark-nav-item';
            this.setState({ selectionIndex: e.target.dataset.id})
            alltarget[e.target.dataset.id].className = `blog-mark-nav-item ${this.state.selectionClass}`
        } else if(this.state.selectionIndex !== e.target.dataset.id) {
            alltarget[this.state.selectionIndex].className = `blog-mark-nav-item`;
            alltarget[e.target.dataset.id].className = `blog-mark-nav-item ${this.state.selectionClass}`
            this.setState({selectionIndex:e.target.dataset.id})
        }     
    }
    mouseover = (e) => {
        const alltarget = document.getElementsByClassName('blog-mark-nav-item');
        for (let i = 0; i < alltarget.length;i++){
            if (i != e.target.dataset.id) {
                if (alltarget[i].className == 'blog-mark-nav-item selectionBefore') {
                    alltarget[i].className ='blog-mark-nav-item selectionBefore blog-nav-mouseover'
                } else {
                    alltarget[i].className = `blog-mark-nav-item blog-nav-mouseover`; 
                }
            }
        }
    }
    mouseout = (e) => {
        const alltarget = document.getElementsByClassName('blog-mark-nav-item');
        const regSelection = /selectionBefore/g
        for (let i = 0; i < alltarget.length; i++){
            if (regSelection.test(alltarget[i].className)) {
                alltarget[i].className ='blog-mark-nav-item selectionBefore'
            } else {
                alltarget[i].className = `blog-mark-nav-item`; 
            }
        }
    }
    render() {
        return (
            <>
                <div className={'blog-index-nav-right-base ' + this.state.BoxWind} >
                    <div className={'blog-index-nav-r-wind-section-box cursor-section '+this.state.isWindHide} onClick={this.changeWind} onMouseOver={this.changeWind} onMouseOut={this.changeSpan}>
                        <div className='blog-index-nav-right-wind-box ' >
                            <span className={'blog-index-nav-right-wind-up-line ' + this.state.UpLineBefore}></span>
                            <span className={'blog-index-nav-right-wind-down-line ' + this.state.DownLineBefore}></span>
                        </div>
                    </div>
                    <div className={'blog-index-nav-right-unwind-box ' + this.state.isUnWindHide}>
                        <ul className='b-i-n-r-unwind-item-box'>
                                {this.data.map((itemdata) => (
                                    <li key={itemdata.key}>
                                        
                                        <a  key={itemdata.key} data-id={itemdata.key-1} className='blog-mark-nav-item' onClick={this.gotobigtag} onMouseOver={this.mouseover} onMouseOut={this.mouseout}>{itemdata.item}</a>
    
                                    </li>
                                )    
                                )}
                        </ul>
                    </div>
                </div>
            </>    
        )
    } 
}