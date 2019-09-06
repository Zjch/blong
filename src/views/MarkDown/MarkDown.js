import React from 'react';
import Editor from 'for-editor';
import { Form, Input, Button, Mentions, Modal, Upload, Icon } from 'antd';
// 引入七牛
import * as qiniu from 'qiniu-js';

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
            },
            visible: false
        }
    }

    // 内容改变的回调
    handleChange = (value) => {
        console.log(value)
        this.setState({
            value
        })
    }

    // 保存回调(ctrl+s)
    handleSave = (value) =>{
        console.log(value)
    }

    // 点击保存
    handleSubmit = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        })
    }

    // 选择封面弹窗
    showModal = () => {
        this.setState({
          visible: true,
        });
    };
    
    // 弹窗确定
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    // 弹窗取消
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render(){
        const { value } = this.state
        const { getFieldDecorator } = this.props.form;
        /**
         * getFieldDecorator: 用于和表单进行双向绑定,使用 this.props.form.setFieldsValue来动态改变表单值
         * getFieldsError: 获取一组输入控件的 Error ，如不传入参数，则获取全部组件的 Error
         * getFieldError: 获取某个输入控件的 Error
         * isFieldTouched: 判断一个输入控件是否经历过 getFieldDecorator 的值收集时机 options.trigger
         */
        return (
            <div style={style}>
                <Form onClick={this.handleSubmit}>
                    <Form.Item label="标题">
                        {
                            getFieldDecorator('title',{rules:[
                                {required: true, message: '标题不能为空'}
                            ]})(
                                <Input size='large' placeholder="请输入标题" />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="摘要">
                        {
                            getFieldDecorator('digest',{rules: [
                                {required: true, message: '摘要不能为空'},
                            ]})(
                                <Mentions rows="3" placeholder="请输入摘要"></Mentions>
                            )
                        }
                    </Form.Item>
                    <Form.Item label="正文">
                        {
                            getFieldDecorator('markdown')(
                                <Editor
                                    // value={value} 
                                    setFieldsValue={value}
                                    onChange={this.handleChange} 
                                    onSave={this.handleSave}
                                    toolbar={this.state.toolbar}
                                />
                            )
                        }
                    </Form.Item>
                    <Form.Item label="封面图">
                        {
                            getFieldDecorator('coverimg',{rules: [
                                {required: true, message: '请选择图片'}
                            ]})(
                                <Input size='large' disabled={true} placeholder="封面URL" />
                            )
                        }
                        <Button type="primary" onClick={this.showModal}>选择图片</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" block size='large' htmlType="submit">发布</Button>
                    </Form.Item>
                </Form>

                <Modal
                    title="选择封面图"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText="取消"
                    okText="确定"
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <Upload {...props2}>
                        <Button>
                            <Icon type="upload" /> Upload
                        </Button>
                    </Upload>
                </Modal>
            </div>
        )
    }
}

// css
const style = {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    marginTop: '20px',
    background: '#fff',
    padding: '20px 50px',
    borderRadius: '5px'
}

const props2 = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    className: 'upload-list-inline',
};

const MarkDownForm = Form.create({name: 'mark_down'})(MarkDown);

export default MarkDownForm;