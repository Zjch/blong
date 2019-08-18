import React from 'react';
import '../../assets/css/home.css'
import HomeImg from '../../assets/images/home_bg.jpg'
import { Link } from 'react-router-dom';
import RouteWithSubRoutes from '../../tool/RouteWithSubRoutes'

class Home extends React.Component{
    
    render(){
        const {routes} = this.props
        return (
            <div>
                <div className='home_box'>
                    <img src={HomeImg} alt='图片' />
                    <div className="home_box_class">
                        <span>
                            <Link to="/home">基础知识</Link>
                        </span>
                        <span>/</span>
                        <span>
                            <Link to="/home/advance">技能进阶</Link>
                        </span>
                        <span>/</span>
                        <span>
                            <Link to="/home/trifles">琐事</Link>
                        </span>
                    </div>
                </div>
                <div className="home_content">
                    {
                        routes.map((route, key) => {
                            return (
                                <RouteWithSubRoutes key={key} {...route} />
                            )
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

export default Home;