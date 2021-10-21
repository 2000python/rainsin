/*
 * @Author: your name
 * @Date: 2021-08-06 22:51:35
 * @LastEditTime: 2021-09-24 22:26:09
 * @LastEditors: 尉旭胜(Riansin)
 * @Description: In User Settings Edit
 * @FilePath: /react-blog/blog/pages/api/loading.js
 */
import React from 'react';
// import '../../styles/loading.css'
import Image from 'next/image';
import loadingimg from '../../public/illust-childs.png'

// function LoadingHide() {
//     window.onload = function(){
//         let loading = document.querySelector('.loading');
//         loading.className = 'loading loading-hide';
//     }
// }
  // if (!this.props.loading) {
        //     return (        
        //         <div>
        //         <div className='loading-animation' >
        //        </div>
        //    </div>)
            
        // } else {
        //     return (
        //         <div>
        //              <div className='loading' >
        //                 <div className='load-box'>
        //                     <h1>嗨！陌生人</h1>
        //                     <hr />
        //                     <h2>忘记失去的，感激拥有的，期待将至的。</h2>
        //                     <Image src={loadingimg} alt="美好" id='load-img'/>
        //                 </div >
        //             </div>
        //         </div>
        //     )
        // }

export default class loading extends React.Component {
    render() {
        if (!this.props.loading) {
            return (
                <div>
                    <div className='loading-animation' >
                    </div>
                </div>)
                
        } else {
            return (
                <div>
                    <div className='loading' >
                        <div className='load-box'>
                            <h1>嗨！陌生人</h1>
                            <hr />
                            <h2>忘记失去的，感激拥有的，期待将至的。</h2>
                            <Image src={loadingimg} alt="美好" id='load-img' priority={true} />
                        </div>
                    </div>
                </div>
            )
        }
        
    }
       
}