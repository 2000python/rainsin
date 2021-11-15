/*
 * @Author: your name
 * @Date: 2021-08-06 22:51:35
 * @LastEditTime: 2021-11-06 19:29:14
 * @LastEditors: 尉旭胜(Riansin)
 * @Description: In User Settings Edit
 * @FilePath: /react-blog/blog/pages/api/loading.js
 */
import React from 'react';
import Image from 'next/image';

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
                            <Image src="https://rainsin-1305486451.file.myqcloud.com/img/webp/illust-childs.webp" alt="美好" id='load-img' priority={true} width={600} height={ 400}/>
                        </div>
                    </div>
                </div>
            )
        }
        
    }
       
}
