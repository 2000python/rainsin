/*
 * @Author: 尉旭胜(Riansin)
 * @LastEditors: 尉旭胜(Riansin)
 */
import React from "react";

export default class ProgressBar extends React.Component{
    state = {
        left: 0,
    }
    componentDidMount() {
        window.onscroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const screenWight = document.documentElement.clientWidth;
            this.setState({
                left: screenWight * (scrollTop / scrollHeight),
            })
        }
    }
    render() {
        return (
            <>
                <div className='scroll-progress-bar' style={{width: this.state.left}}>
                    
                </div>
            </>
        )
    }
}