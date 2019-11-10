import    React,{Component}    from    'react'

// 导入配置了路由规则
import      { HashRouter as Router, Route, Switch, Redirect }  from  'react-router-dom' 

import   Login   from      './login'

import  Layout  from   './layout'

export  default  class  Index   extends    Component{
    render()     {
        return    <div>
            <Router>
                {/* <Link  to= "/login"   component= {Login} />                              
                <Link  to= "/layout"   component= {Layout} />      
 */}
        
                {/* /路由匹配规则  */}
                <Switch>
                <Route path="/login"  component= {Login}  />                     
                <Route path="/layout"  component= {Layout} />      
                <Redirect  from ="/"     to= '/login' />

                </Switch>                 
            </Router>
        </div>
    }
}