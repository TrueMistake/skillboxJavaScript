import React from 'react'
import {render} from 'react-dom'
import Form from './components/form'
import TodoList from './components/todoList'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
           comments: JSON.parse(localStorage.getItem('comments')) || [] // если нет комментов, пустой массив
        };
    }

    addData = (comment) => {     /* addData - передаём в Form */
        let {comments} = this.state; // var comments = this.state.comments;
        comments.push(comment);
        this.setState({comments});
    }

    removeData = (idx) => {      /* removeData - передаём в TodoList */
        let {comments} = this.state;
        comments.splice(idx, 1); /* Метод slice возвращает возвращает подстроку из строки (исходная строка при этом не изменяется). Первым параметром указывается номер символа строки, с которого начинается вырезание, а вторым параметром - номер символа, на котором закончится вырезание (при этом символ с этим номером не включится в вырезанную часть). */
        this.setState({comments});
    }

    render() {
        localStorage.setItem('comments', JSON.stringify(this.state.comments)); // JSON.stringify - Значение, преобразуемое в строку JSON.
        return (
           <div>
                <Form addData={this.addData} />
                <TodoList todoItems = {this.state.comments} removeData = {this.removeData}/>
            </div>
        );
    }
}


render(<App />, document.getElementById('app'));
