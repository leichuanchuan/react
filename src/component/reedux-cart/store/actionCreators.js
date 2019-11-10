import  {ADD_GOODS, UPDATE_GOODS, DELETE_GOODS}   from     './actionTypes'


const  addGoods  =  goods   =>    {
    return   {
        type: ADD_GOODS,
        payload: goods
    }
}

//   修改创建的vduex 中的值
const  updategoods  =      (goods)   =>     {
    return     {       
        type:   UPDATE_GOODS,
        payload: goods
    }
}

//   删除的同步方法
const   deletegoods    = id   =>    {
    return   {
        type: DELETE_GOODS,
        payload: id
    }
}

//  删除的异步方法

 const   asyncdeletegoods   = id   =>   {
    return   dispatch  =>         {
        setTimeout(()   =>     {
            dispatch(deletegoods(id))
        })
    }
 }






export   {addGoods, updategoods, asyncdeletegoods }