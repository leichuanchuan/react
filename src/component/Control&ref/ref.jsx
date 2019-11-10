import React, { Component } from 'react';



export   default   class  Ref  extends    Component{
    constructor()       {
        super()
        this.inputref  =  React.createRef()
        this.fileref  =    React.createRef() 
    }


    handleSubmit  =  e  =>  {
        e.preventDefault()
        console.log(this.fileref.current.files[0]);
        
    }



    render() {
        return  (
            <div>
                我是ref
                {/* <input  ref="inputref"  type="text"/> */}                                  
                {/* <input     ref={this.inputref} type="text"/> */}                       
                <form onSubmit={this.handleSubmit}>
                    <input type="file"    ref= {this.fileref} />       
                    <br/>
                    <button    type= "submit" >上传</button>
                </form>

            </div>
        )
    }




    componentDidMount()            {
        // // console.log(this.refs.inputref);
        // // this.refs.inputref.focus()
        // console.log(this.inputref.current);
        // this.inputref.current.focus()
    }
}