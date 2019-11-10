import  React,{ Component }    from   'react'


function  withPosition (WrappedComponent){
    return   class extends  Component   {
        constructor() {
            super()
    
            this.state = {
                x: 0,
                y: 0
            }
        }
    
        handleMouseMove = e => {
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        }
        
        componentDidMount() {
            window.addEventListener('mousemove',this.handleMouseMove)
        }
    
        componentWillUnmount() {
            window.removeEventListener('mousemove',this.handleMouseMove)
        }

        render() {
            return <WrappedComponent x={this.state.x} y={this.state.y}/>
        }
    }
}

class  Mouse  extends   Component      {
    render()  {
    return  <div>x的位置是:   {this.props.x} y的位置是 {this.props.y} </div>
    }
}


class Cat  extends  Component{
    render()    {
        return <img style={{width:100,height:80,position:'absolute',left: this.props.x - 50,top: this.props.y - 40}} src="http://img0.imgtn.bdimg.com/it/u=110267935,1736511557&fm=26&gp=0.jpg"/>
    }
}



export   class    Hoc  extends  Component  {
    render() {              
        const  EnhanceMouse  =withPosition(Mouse)
        const  EnhanceCat  =withPosition(Cat)


        return  (
            <div>
                <EnhanceMouse/>
                <EnhanceCat/>
            </div>
        )
    }
}



export  default  Hoc