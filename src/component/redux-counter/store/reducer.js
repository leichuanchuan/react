
import  {ADD,Min}      from    './actiontype'





export  default   (state  =  250, action)    =>     {
    switch (action.type)      {
        case ADD:
            return  state + action.count
        case Min:
            return  state - action.count    

        default: return state
    }
}