import React from 'react';
import Comment from '../comment';
import './style.css';

class TodoList extends React.Component {

    getData = (idx) => { // потомок передал нам в этот метод свой индекс удаляемого элемента. мы тут же пуляем его еще выше в метод родителя
    this.props.removeData(idx);
}

render() {
    return (
        <ul className="todo-list">
            {this.props.todoItems.map((item, idx) => {
                return <Comment
                        key={idx}
                        author={item.author}
                        text={item.text}
                        date={item.date}
                        time={item.time}
                        getData={this.getData}
                        id={idx}
                        />
            })}
        </ul>
        )
    }
}


export default TodoList;
