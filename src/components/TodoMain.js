/**
 * Created by yikun on 16/05/06.
 */

'use strict';
import React from 'react';
import TodoItem from './TodoItem.js'

class TodoMain extends React.Component {

    render() {
        if(this.props.todos.length == 0) {
            return (
                <div className="todo-empty">恭喜您，目前没有待办任务！</div>
            )
        } else {
            return (
                <ul className="todo-main">
                    {
                        this.props.todos.map((todo, index) => {
                            //{...this.props} 用来传递TodoMain的todos属性和delete、change方法。
                            return <TodoItem text={todo.text} isDone={todo.isDone} index={index} {...this.props}/>
                        })
                    }
                </ul>
            )
        }
    }

}


export default TodoMain;
