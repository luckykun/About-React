import React from 'react';
import {Table, Icon} from 'antd';

export default class myTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tDate: [],
            selectedRowKeys: []
        };
    }

    componentDidMount() {
        const data = [];  //23条数据

        for (let i = 0; i < 23; i++) {
            data.push({
                key: i,
                name: `义坤${i}`,   //带变量的字符串
                age: 18,
                address: `西湖区湖底公园${i}号`,
                operate: 'https://www.aliyun.com'
            });
        }

        this.setState({
            tDate: data
        })
    }

    // checkbox状态
    onSelectChange(selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.setState({ selectedRowKeys })
    }

    render() {
        const columns = [{
            title: '姓名',
            width: '20%',
            dataIndex: 'name'
        }, {
            title: '年龄',
            width: '20%',
            dataIndex: 'age',
        }, {
            title: '住址',
            width: '40%',
            dataIndex: 'address'
        }, {
            title: '操作',
            width: '20%',
            dataIndex: 'operate',
            render(text) {
                return <a href={text} target="_blank">查看</a>
            }
        }]

        const { selectedRowKeys } = this.state

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange.bind(this)
        }

        const pagination = {
            total: this.state.tDate.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize)
            },
            onChange(current) {
                console.log('Current: ', current)
            }
        }

        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.tDate} bordered pagination={pagination} />
        )
    }
}
