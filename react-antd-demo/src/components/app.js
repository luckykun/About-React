'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';

// 引入Antd的导航组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

// 引入单个页面（包括嵌套的子页面）
import myIntroduce from './introduce.js';
import myTable from './table.js';
import myForm from './form.js';
import myProgress from './progress.js';
import myCarousel from './carousel.js';
// import myCalendar from './calendar.js';


let routeMap = {
    '/myIntroduce': '0',
    '/myTable': '1',
    '/myForm': '2',
    '/myProgress': '3',
    '/myCarousel': '4'
};

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            username: ''
        };
    }

    handleClick(e) {
        this.setState({
            current: e.key
        });
    }

    componentWillMount() {
        var route = this.props.location.pathname;
        this.setState({
            current: routeMap[route] || '0'
        });
    }

    componentDidMount() {
        this.setState({
            username: 'luckykun'
        });
    }

    render() {
        return (
            <div>
                <div id="leftMenu">
                    <img src='src/images/logo.png' width="50" id="logo"/>
                    <Menu theme="dark"
                        onClick={this.handleClick.bind(this)}
                        style={{ width: 200 }}
                        defaultOpenKeys={['sub1', 'sub2']}
                        defaultSelectedKeys={[this.state.current]}
                        mode="inline"
                    >
                        <Menu.Item key="0"><Link to="/myIntroduce"><Icon type="mail" />我没有子菜单</Link></Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="bars" /><span>主导航</span></span>}>
                            <Menu.Item key="1"><Link to="/myTable">表格</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/myForm">表单</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/myProgress">进度条</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/myCarousel">轮播</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}


// 配置路由
ReactDom.render((
    <Router history={hashHistory} >
        <Route path="/" component={Sider}>
            <IndexRoute component={myIntroduce} />
            <Route path="myIntroduce" component={myIntroduce} />
            <Route path="myTable" component={myTable} />
            <Route path="myForm" component={myForm} />
            <Route path="myProgress" component={myProgress} />
            <Route path="myCarousel" component={myCarousel} />
        </Route>
    </Router>
), document.getElementById('app'));
