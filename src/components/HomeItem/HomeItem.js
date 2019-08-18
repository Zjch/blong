
import React from 'react';
import Image from '../../assets/images/home_bg.jpg'
import './HomeItem.css'
import { Button, Icon, Pagination } from 'antd';

class HomeItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            info: {}
        }
    }

    render(){
        let list = this.props.list
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <div key={index} className="item_box">
                                <div className="item_img">
                                    <span className="item_time">{item.time}</span>
                                    <img src={Image} alt='图片' />
                                </div>
                                <p className="item_title">{item.title}</p>
                                <p className="item_con">{item.digest}</p>
                                <div className="item_btn">
                                    <Button type="primary">查看详情<Icon type="arrow-right" /></Button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="item_pagination">
                    <Pagination defaultCurrent={6} total={500} />
                </div>
            </div>
        )
    }
}

export default HomeItem