/*
 * @Author: 尉旭胜(Riansin)
 * @LastEditors: 尉旭胜(Riansin)
 */
import React, { useContext,useState,useEffect} from "react";
import Link from 'next/link';

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
                <div className='blog-index-nav-left'>
                    <div className='blog-index-nav-left-icon'>
                        
                    </div>
                    <Link href='#'>
                        <a className='blog-index-nav-left-item'>
                            Apple Trees
                        </a>
                    </Link>
                </div>
            <div className='blog-index-nav-right'>
                <RightIcon iswind={ props.iswind}/>
            </div>
        </div>
    )
}

class RightIcon extends React.Component {
    state = {
        UpLineBefore: '',
        DownLineBefore: '',
        BoxWind: 'blog-index-nav-right-unwind',
        isWindHide: 'ishide',
        isUnWindHide: ''
    }
    data = [
        {
            item: "Technology"
        },
        {
            item: "Live"
        },
        {
            item:"Resource"
        },
        {
            item:"Skill"
        },
        {
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
                                {this.data.map((itemdata, index) => (
                                    <li key={index}>
                                        <Link href='#'>
                                        <a key={index}>{itemdata.item}</a>
                                        </Link>
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