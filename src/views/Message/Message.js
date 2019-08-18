import React from 'react';
import { Pagination, Input } from 'antd'
import '../../assets/css/message.css'
const { Search } = Input;

class Message extends React.Component{

    render(){
        return (
            <div className="message_box">
                <div>
                    <div className="message_item">
                        <p>
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                        </p>
                        <div className="message_time">
                            <span>发布于: 2019-8-14</span>
                        </div>
                    </div>

                    <div className="message_item">
                        <p>
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                            和哈哈哈哈哈哈哈哈哈哈
                        </p>
                        <div className="message_time">
                            <span>发布于: 2019-8-14</span>
                        </div>
                    </div>
                </div>
                <div className="item_pagination">
                    <Pagination defaultCurrent={6} total={500} />
                </div>
                <div className="message_submit">
                    <Search
                        placeholder="留个言"
                        enterButton="发送"
                        size="large"
                        onSearch={value => console.log(value)}
                    />
                </div>
            </div>
        )
    }
}

export default Message;