import React from 'react';
import HomeItem from '../../../components/HomeItem/HomeItem'

class Advance extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    title: '技能进阶1',
                    digest: '这是一个很牛逼的人，做的很牛逼的事，啊哈哈哈哈！',
                    time: '2019/8/14'
                },
                {
                    id: 2,
                    title: '我是标题2',
                    digest: '这是一个很牛逼的人，做的很牛逼的事，啊哈哈哈哈！',
                    time: '2019/8/15'
                },
                {
                    id: 3,
                    title: '我是标题3',
                    digest: '这是一个很牛逼的人，做的很牛逼的事，啊哈哈哈哈！',
                    time: '2019/8/16'
                },
                {
                    id: 4,
                    title: '我是标题4',
                    digest: '这是一个很牛逼的人，做的很牛逼的事，啊哈哈哈哈！',
                    time: '2019/8/17'
                }
            ]
        }
    }

    render(){
        return (
            <div>
                <HomeItem list={this.state.list} />
            </div>
        )
    }
}

export default Advance;