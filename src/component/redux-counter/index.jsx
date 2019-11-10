import React, { Component } from 'react';

import  Counter   from  './counter'
import  Show   from  './show'

export   default   class Index  extends   Component{
    render() {
        return   <div>
            <Counter/>
            <hr/>
            <Show/>
        </div>
    }
}



