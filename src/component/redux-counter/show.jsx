import React, { Component } from 'react';

import  store  from   './store/index'
export   default   class Show  extends   Component{


    constructor()   {
        super()
        this.state  =   {
            name: store.getState()
        }
    }

    componentWillMount()    {
        store.subscribe(()  => {
            this.setState({
                name: store.getState()
            })
        }) 
    }


    render() {
        return   <div>
            仓库里的结果是: {this.state.name}
        </div>
    }
}



