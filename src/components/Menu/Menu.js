import React from 'react';
import './Menu.css'
import Logo from '../../assets/images/logo.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import router from '../../router/index';
import RouteWithSubRoutes from '../../tool/RouteWithSubRoutes'

class Menu extends React.Component{
    render(){
        return (
            <Router>
                <div className="Menu_box">
                    <div className="Menu">
                        <div className="Menu_image">
                            <img src={Logo} alt="LOGO" />
                        </div>
                        <div className="Menu_right">
                            <span>
                                <Link to="/home">首页</Link>
                            </span>
                            <span>
                                <Link to="/message">留言板</Link>
                            </span>
                            <span>
                                <Link to="/personal">履历</Link>
                            </span>
                            <span>
                                <Link to="/contact">联系我</Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='content'>
                    {
                        router.map((route, key) => {
                            return (
                                <RouteWithSubRoutes key={key} {...route} />
                            )
                        })
                    }
                </div>
            </Router>
        )
    }
}

export default Menu;