import    React,{Component}    from    'react'

// 导入样式
import   styles  from   './Login.module.css'

export  default  class  Index   extends    Component{                                                          
    state  =        {
        username:'admin',
        password: '123'
    }


    valuechange  =   (e)  =>      {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login =  ()   =>           {
        if(this.state.username === 'admin'   && this.state.password  === '123')    {
            console.log(this);           
            console.log(this.props);
            this.props.history.push('/layout')
            
        }
    }

    render()     {
        return    <div   className= {styles.loginContainer} >
            {/* 登录页面+++++++++++ */}
           用户名: <input type="text"  name= "username"    onChange = {this.valuechange}    value=  {this.state.username}   />
           <br/>
           密码: <input type="password"  name="password"   onChange = {this.valuechange}   value=  {this.state.password}  />                                        
           <br/>
           <button onClick = {this.login}   >登录</button>
        </div>
    }
}