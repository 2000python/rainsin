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
    componentDidMount() {
        if (this.props.iswind) {
            this.setState({
                isWindHide: '',
                isUnWindHide: 'ishide' 
            })
        } else {
            this.setState({
                isWindHide: 'ishide',
                isUnWindHide: '' 
            })
        }
    }
    
    
    changeWind = () => {
        this.setState({
            UpLineBefore: 'top-wind-move',
            DownLineBefore: 'down-wind-move'
        })
    };
    changeSpan = () => {
        this.setState({
            UpLineBefore: 'top-wind-out',
            DownLineBefore: 'down-wind-out'
        });
    }
    render() {
        return (
            <>
                <div className={'blog-index-nav-right-base ' + this.state.BoxWind} onClick={this.changeWind} onMouseOver={this.changeWind} onMouseOut={this.changeSpan}>
                    <div className={'blog-index-nav-right-wind-box '+this.state.isWindHide}>
                        <span className={'blog-index-nav-right-wind-up-line ' + this.state.UpLineBefore}></span>
                        <span className={'blog-index-nav-right-wind-down-line ' + this.state.DownLineBefore}></span>
                    </div>
                    <div className={'blog-index-nav-right-wind-box '+this.state.isUnWindHide}>
                    </div>
                </div>
            </>    
        )
    } 
}