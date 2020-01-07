import React from 'react';
import Button from '../button';
import './style.css';

class Comment extends React.Component {

    /* Для того, чтобы обновить состояние, которое находится у нас в App, нам нужно, при нажатии на кнопку "Удалить" передавать индекс удаляемого элемента наверх
     Сначала из Comment в TodoList, потом из TodoList в App*/

    handleClick = () => {
        const {id} = this.props;
        this.props.getData(id); // Здесь мы передаем в метод из наших пропсов необходимую информацию. Она становится доступна в качестве аргумента в родительском компоненте
    }

    render() {
        const {author, text, date, time} = this.props; /*       author = this.props.author,
                                                                text = this.props.text,
                                                                date = this.props.date,
                                                                time = this.props.time; */
        return (
            <li className="todoItem">
                <p>{author}</p>
                <p>{text}</p>
                <p>{date}</p>
                <p>{time}</p>
                <Button
                    type="button"
                    text="Удалить"
                    onClick={this.handleClick}
                    >
                </Button>
            </li>
        )
    }


};

Comment.defaultProps = {
    date: null,
    time: null
};

export default Comment;
