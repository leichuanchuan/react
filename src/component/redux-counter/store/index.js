import    {createStore, applyMiddleware, compose  }  from   'redux'                               

//导入reducer
import   reducer    from    './reducer'              

//导入redux-thunk
import thunk from 'redux-thunk';


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const    store  = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

//导出
export  default  store