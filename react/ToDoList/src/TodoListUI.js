import React from 'react'
import { Button, Input, List } from 'antd'

const TodoListUI = (props) => {
    return (
        <div style={{ textAlign: "center" }}>
            <Input
                placeholder={props.inputValue}
                style={{ width: '300px', marginRight: '10px' }}
                onChange={props.changeInputValue}
                value={props.inputValue}
            />
            <Button
                type="primary"
                onClick={props.addItem}
            >增加</Button>
            <div style={{ margin: '10px auto', width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item
                            onClick={() => { props.delItem(index) }}
                        >{item}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

// class TodoListUI extends Component{
//     render() {
//         return (
//             <div style={{ textAlign: "center" }}>
//                 <Input
//                     placeholder={this.props.inputValue}
//                     style={{ width: '300px', marginRight: '10px' }}
//                     onChange={this.props.changeInputValue}
//                     value={this.props.inputValue}
//                 />
//                 <Button
//                     type="primary"
//                     onClick={this.props.addItem}
//                 >增加</Button>
//                 <div style={{ margin: '10px auto', width: '300px' }}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item, index) => (
//                             <List.Item
//                                 onClick={() => { this.props.delItem(index)}}
//                             >{item}
//                             </List.Item>
//                         )}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

export default TodoListUI