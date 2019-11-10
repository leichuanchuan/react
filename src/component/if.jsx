import  React,{ Component } from 'react'                                
function  One()    {
    return  <div>
        true
        哈喽,大家好
    </div>
}

class  Two  extends Component{
    render()   {
        return  <div>
            false
            我爱中国
        </div>
    }
}



class  If  extends    Component{
    constructor()      {
        super()
        this.state  =    {
            islogin: false
        }
    }

    render()     {
        // if(this.state.islogin)   {
        //     return  <div>
        //         <One/>
        //     </div>
        // }    else    {
        //     return  <div>
        //         <Two/>
        //     </div>
        // }
        return   <div>
            {/* {this.state.islogin  ?  <One/> :  <Two/> } */}                                         
            {this.state.islogin  &&  <One/> }
            {!this.state.islogin  &&  <Two/>  }

        </div>
        
    }

}

export default  If

