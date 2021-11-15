/*
 * @Author: 尉旭胜(Riansin)
 * @LastEditors: 尉旭胜(Riansin)
 */
import React, { useContext,useState} from "react";
import Link from 'next/link';

export default function ArtNav(props){
    const [boxClass, setBoxClass] = useState({
        UpLineBefore: '',
        DownLineBefore: ''
    });
    const changeWind = () => {
        setBoxClass({
            UpLineBefore: 'top-wind-move',
            DownLineBefore: 'down-wind-move'
        })
    };
    const changeSpan = () => {
        setBoxClass({
            UpLineBefore: 'top-wind-out',
            DownLineBefore: 'down-wind-out'
        });
    }
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
                    <div className='blog-index-nav-right-base blog-index-nav-right-wind' onClick={changeWind} onMouseOver={changeWind} onMouseOut={changeSpan}>
                        <div className='blog-index-nav-right-wind-box'>
                        <span className={'blog-index-nav-right-wind-up-line '+ boxClass.UpLineBefore}></span>
                        <span className={'blog-index-nav-right-wind-down-line '+ boxClass.DownLineBefore}></span>
                        </div>
                    </div>
                    <ul className='blog-index-nav-right-unwind-box'>
                    <li>
                        
                        </li>
                </ul>
                </div>
        </div>
    )
}