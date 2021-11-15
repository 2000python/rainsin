/*
 * @Author: 尉旭胜(Riansin)
 * @LastEditors: 尉旭胜(Riansin)
 */
// import { useMouse } from 'ahooks';
import React from 'react';

class Mouse extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // props接受X，Y改变位置状态，classNameMove改变类名以改变样式。
      // 鼠标图片是否经过a标签
      isMoveAtag: false,
      // 鼠标位置状态
      X: 0,
      Y: 0,
      // 鼠标组件的类名
      classNameMove: '',
    }

  }
  componentDidMount() {
    document.body.addEventListener(
      'mousemove', (e) => {
        if (this.state.isMoveAtag === false) {
          this.setState({
            X: e.clientX + scrollX - 10,
            Y: e.clientY + scrollY - 10,
            classNameMove: 'mouse-origin-size'
          })
        } else {
          this.setState({
            X: e.clientX + scrollX - 25,
            Y: e.clientY + scrollY - 25,
            classNameMove: 'mouse-change-size'
          })
        }
        
      }
    );
    // 鼠标经过标签时鼠标图片样式变化
    const arr = Array.from(document.getElementsByTagName("a")), anticon = Array.from(document.getElementsByClassName('anticon')), cursorSection = Array.from(document.getElementsByClassName('cursor-section')),backTop = Array.from(document.getElementsByClassName('ant-back-top'));
    const cursorSectionArray = [...arr, anticon[0], ...cursorSection,...backTop];
    cursorSectionArray.forEach((e) => {
      e.addEventListener('mousemove', () => {
        this.setState({ isMoveAtag: true })
      }), false;
      e.addEventListener('mouseleave', () => {
        this.setState({ isMoveAtag: false })
      }), false;
    })
  }
  render() {
    return (
      <>
        <div className={'mouse-box ' + this.state.classNameMove} style={{ top: this.state.Y + 'px', left: this.state.X + 'px' ,opacity:'.5'}}>
        </div>
      </>
    )
  }
}

 export default Mouse

