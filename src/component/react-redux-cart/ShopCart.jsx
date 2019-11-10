import React, { Component } from 'react';

//导入仓库store
// import store from './store/index'

import { updategoods, asyncdeletegoods } from './store/actionCreators'

import { connect } from 'react-redux'


//导入第三方ui组件

import { Table, InputNumber, Button, Modal } from 'antd'


// const { Column } = Table;
const { confirm } = Modal



class ShopCart extends Component {
    // constructor() {
    //     super()

    //     //  把从vduex中取出的数据 加入属性key
    //     const storegoodlist = store.getState()
    //     storegoodlist.forEach(item => {
    //         item.key = item.id
    //     })

    //     this.state = {
    //         //  初始化的时候给goodlist 赋值
    //         goodlist: storegoodlist
    //     }
    // }



    deletegood = id => {
        console.log(id);
        confirm({
            title: '提示',
            content: '确认删除该商品吗?',
            okText: '确定',
            cancelText: '取消',
            onOk: () => {
                // store.dispatch(asyncdeletegoods(id))
                this.props.deletegood(id)
            }
        })
    }



    // changeNum = (id, num) => {
    //     console.log(id, num);
    //     store.dispatch(updategoods({ id, num }))
    // }

    columns = [
        {
            title: "名字",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "图片",
            dataIndex: "url",
            key: "url",
            render: url => <img src={url} style={{ width: 100, height: 80 }} alt="" />
        },
        {
            title: "数量",
            // dataIndex: "num",
            // key: "num",
            render: ({ id, num }) => {
                return <InputNumber min={1} defaultValue={num} onChange={data => this.props.changeNum(id, data)} />
            }
        },
        {
            title: "单价",
            dataIndex: "price",
            key: "price"
        },
        {
            title: "总价",
            key: "total",
            // 如果我们整个列中，没有写dataIndex，则参数就是整一行数据
            render: ({ num, price }) => {
                return <span>{num * price}</span>
            }
        },
        {
            title: "操作",
            dataIndex: 'id',
            key: "action",
            render: id => {
                return <Button type="danger" onClick={() => this.deletegood(id)}  >删除</Button>
            }
        }
    ];

    // componentDidMount() {
    //     // 监听仓库变化,并且重新给goodlist 赋值
    //     store.subscribe(() => {
    //         //把从vduex中取出的数据 加入属性key
    //         const storegoodlist = store.getState()
    //         storegoodlist.forEach(item => {
    //             item.key = item.id
    //         })

    //         this.setState({
    //             goodlist: storegoodlist
    //             // goodlist: store.getState()
    //         })
    //     })
    //     console.log(this.state.goodlist);

    // }
    render() {
        return (
            <div>
                {/* 购物车 */}
                {/* 购物车  {this.state.goodlist} */}

                <Table columns={this.columns} dataSource={this.props.goodlist} pagination={false} />
            </div>
        );
    }
}

// export default ShopCart;

const mapStateToProps = state => {
    const generateKey = () => {
        const oldstate = JSON.parse(JSON.stringify(state))
        oldstate.forEach(item => {
            item.key = item.id
        })

        return oldstate
    }

    return {
        goodlist: generateKey()
    }

}

const mapDispatchToProps = dispatch => {
    return {
        // 修改仓库的方法
        changenum: function (id, num) {
            //触发acton
            dispatch(updategoods({ id, num }))
        },
        //删除仓库的方法
        deletegood: function (id) {
            //触发action
            dispatch(asyncdeletegoods(id))
        }
    }
}


/**
 * mapStateToProps 获取值
 * mapDispatchToProps 修改值
 */

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart)





