import React, { Component } from 'react'

import {
    HashRouter as Router,
    Link,
    Route,
    Switch,
    Redirect
} from "react-router-dom"


//导入子组件
import Newlist from './newlist'
import Foodlist from './/foodlist'
import NotFound from "./NotFound"


import  Newdata  from        './newdetali'



class Index extends Component {
    render() {
        return (
            <Router>
                <div>
                    <p>
                        <Link to="/newlist">新闻列表</Link>--
                        <Link to="/foodlist">食品列表</Link>
                    </p>
                    <div>
                        <Switch>
                            {/* <Route path="/newlist" component={Newlist} />
                        <Route path="/foodlist" component={Foodlist} /> */}
                            {/* <Route exact path="/"  >
                               <Newlist />
                            </Route> */}
                            {/* query传参 */}
                            {/* <Route  path= "/newsdate" component= {Newdata}   /> */}
                            {/* params传参 */}
                            <Route path=  "/newsdate/:name"  component= {Newdata}  />


                            <Route path="/foodlist"   >
                                <Foodlist />
                            </Route>

                            <Route path="/newlist"   >
                                <Newlist />
                            </Route>

                            {/* 重定向 */}
                            <Redirect exact from="/" to="/foodlist" />

                            {/* 错误路由  404必须放在最后*/}
                            <Route>
                                <NotFound />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}


export default Index