//  受控组件,双向数据绑定
import    React, {Component}    from   'react'                                              
class  Control  extends    Component {
    constructor()    {
        super()

        this.state   =   {
            username: '666',
            password:  '黑马'
        }
    }

    // changename  =   e  =>    {
    //     console.log(e); 
    //     console.log(e.target);
    //     console.log(e.target.value);
    //     this.setState({
    //         username:  e.target.value
    //     })
    // }

    // changeword  =   e  =>    {
    //     this.setState({
    //         password:  e.target.value
    //     })
    // }

    changevalue  =   e    =>       {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login   =  ()  =>   {
        console.log('login');
        console.log(this.state);
        
    }

    render()      {
        return   <div>
            <br/>
            用户名: 
            {/* <input type="text"   onChange=  {this.changename}     value = {this.state.username}   />  */}
            <input type="text"   name="username"  onChange=  {this.changevalue}     value = {this.state.username}   /> 
             <br/>
            密码: 
            {/* <input type="password"     onChange=  {this.changeword}    value  =  {this.state.password}  name="" id=""/> */}
            <input type="password"   name="password"  onChange=  {this.changevalue}    value  =  {this.state.password}  id=""/>
            <button   onClick =  {this.login}   >登录</button>
        </div>
    }

}


export   default   Control