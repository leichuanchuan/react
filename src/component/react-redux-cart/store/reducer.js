
import {ADD_GOODS, UPDATE_GOODS, DELETE_GOODS} from './actionTypes'

//每次仓库初始化的时候,从本地获取数据, 然后赋值给仓库的默认值

const   goodlist   =  JSON.parse(window.localStorage.getItem('mycart')  ||  '[]' )


export default (state = goodlist, action) => {
    switch (action.type) {
        case ADD_GOODS:
            const addgoodlist = [...state]
            const  obj  =    addgoodlist.find(item   =>    item.id  ===  action.payload.id )

            if  (obj)     {
                obj.num+= 1
            }   else    {
                addgoodlist.push(action.payload)
            }

            return addgoodlist
        
        case   UPDATE_GOODS:
            const   updategoodlist   =      [...state]
            const   updateobj   =    updategoodlist.find(item  =>   item.id ===  action.payload.id)
            updateobj.num   =  action.payload.num

            return   updategoodlist
        
        
        case  DELETE_GOODS:
            const   deletegoodlist    =     [...state]
            const   deleteindex    =    deletegoodlist.findIndex(item   =>    item.id  ===   action.payload.id)
            deletegoodlist.splice(deleteindex,1)
                       
            return     deletegoodlist
    default:
       return  state
    }
}