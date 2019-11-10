import React, { Component } from 'react';

import  store  from     './store/index.js'
import   {add, asyncmintwo} from   './store/action'


export   default   class Counter  extends   Component{
    add  = ()  =>     {
        store.dispatch(add(2))
    }
    min = ()   =>  {
        store.dispatch(asyncmintwo(10))
    }

    


    render() {
        return   <div>
            <button onClick={this.add} >+</button>
            <br/>
            <button  onClick={this.min}  >-</button>
        </div>
    }
}



