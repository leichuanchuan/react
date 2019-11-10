import React, { Component } from 'react';

import styles from './index.module.css'

import { HashRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'


import   Goodlist  from    './Goodlist'
import   Shopcart  from    './ShopCart'
import store from './store';



export default class Index extends Component {                                                                                  
    constructor()    {
        super()
        this.state  =    {
            count: 0
        }



 
    }

    calcTotalCount =  ()   =>   {
        let totalcount  =  0
        store.getState().forEach(item =>      {
            this.setState({
                count: totalcount+= item.num
            })
        })
    }
    componentDidMount()      {      
        console.log('哈哈');
                                                                         
        this.calcTotalCount()                  

        // 监听仓库变化
        store.subscribe(() =>    {
            this.calcTotalCount()
        })
        // 监听窗口的关闭和刷新事件
        window.onbeforeunload     =    () =>      {          
            // console.log('呵呵呵');
             
            // window.localStorage.setItem('test','99999')
            window.localStorage.setItem('mycart',JSON.stringify(store.getState()))
        }



    }
    render() {
        return (
            <Router>
                <div>

                    <h2 className={styles.title} >黑马买买买-商城
                        <p    className={styles.links}>
                            <Link  to= "/goodslist"  >商品列表</Link> &nbsp; &nbsp; &nbsp;
                            <Link  to= "/shopcart"    > 购物车    { this.state.count>0  && `(${this.state.count})` }      </Link>
                        </p>    
                    </h2>
                    
                    <Switch>
                         <Route  path= "/goodslist" component = {Goodlist}  />                                                          
                         <Route  path= "/shopcart" component = {Shopcart}  />                                                          
                         <Redirect from="/"    to="goodslist"  />                                                          
                    </Switch>
                </div>
            </Router>
        )
    }
}