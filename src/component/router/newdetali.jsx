import React, { Component } from 'react';


export   default  class  Newdeta   extends     Component{       
    constructor(props)         {                
        console.log(props);                     
        // const  idd  =   new  URLSearchParams(props.location.search)

        super()
        this.state  =    {
            // newid: idd.get('id')
            newid: props.match.params.name
        }
    }
     
     
    render()     {
        return  <div>
            我是新闻详情组件
        </div>
    }
}