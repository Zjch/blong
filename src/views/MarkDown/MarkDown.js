import React from 'react';
import Editor from 'for-editor';
import { Button } from 'antd';

class MarkDown extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: '',
            toolbar: {
                h1: true, // h1
                h2: true, // h2
                h3: true, // h3
                h4: true, // h4
                img: true, // 图片
                link: true, // 链接
                code: true, // 代码块
                preview: true, // 预览
                expand: true, // 全屏
                /* v0.0.9 */
                undo: true, // 撤销
                redo: true, // 重做
                save: true, // 保存
                /* v0.2.3 */
                subfield: true, // 单双栏模式
            }
        }
    }

    // 内容改变的回调
    handleChange = (value) => {
        this.setState({
            value
        })
    }

    // 保存回调(ctrl+s)
    handleSave = (value) =>{
        console.log(value)
    }

    render(){
        const { value } = this.state
        return (
            <div style={style}>
                <Editor
                    value={value} 
                    onChange={this.handleChange} 
                    onSave={this.handleSave}
                    toolbar={this.state.toolbar}
                />
                <br />
                <Button type="primary" block size='large'>发布</Button>
            </div>
        )
    }
}

// css
const style = {
    maxWidth: '1200px',
    margin: '0 auto',
    marginTop: '20px'
}


export default MarkDown;