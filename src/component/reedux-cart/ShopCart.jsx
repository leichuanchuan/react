import React, { Component } from 'react';

//导入仓库store
import store from './store/index'

import { updategoods, asyncdeletegoods } from './store/actionCreators'




//导入第三方ui组件

import { Table, InputNumber, Button, Modal } from 'antd'


// const { Column } = Table;
const { confirm } = Modal



class ShopCart extends Component {
    constructor() {
        super()

        //  把从vduex中取出的数据 加入属性key
        const storegoodlist = store.getState()
        storegoodlist.forEach(item => {
            item.key = item.id
        })

        this.state = {
            //  初始化的时候给goodlist 赋值
            goodlist: storegoodlist
        }
    }



    deletegoods = id => {
        console.log(id);       
        confirm({
            title: '提示',
            content: '确认删除该商品吗?',
            okText: '确定',
            cancelText: '取消',
            onOk: () => {
                store.dispatch(asyncdeletegoods(id))
            }
        })
    }



    changeNum = (id, num) => {
        console.log(id, num);
        store.dispatch(updategoods({ id, num }))
    }

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
            key: "num",
            render: ({ id, num }) => {
                return <InputNumber min={1} defaultValue={num} onChange={data => this.changeNum(id, data)} />
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
                return <Button type="danger" onClick={() => this.deletegoods(id)}  >删除</Button>
            }
        }
    ];

    componentDidMount() {
        // 监听仓库变化,并且重新给goodlist 赋值
        store.subscribe(() => {
            //把从vduex中取出的数据 加入属性key
            const storegoodlist = store.getState()
            storegoodlist.forEach(item => {
                item.key = item.id
            })

            this.setState({
                goodlist: storegoodlist
                // goodlist: store.getState()
            })
        })
        console.log(this.state.goodlist);

    }
    render() {
        return (
            <div>
                {/* 购物车 */}
                {/* 购物车  {this.state.goodlist} */}

                <Table columns={this.columns} dataSource={this.state.goodlist} pagination={false} />
            </div>
        );
    }
}

export default ShopCart;