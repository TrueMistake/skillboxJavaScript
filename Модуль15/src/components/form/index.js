import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Comment from '../comment';
import Button from '../button';

class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            author: '',
            text: '',
            date: null,
            time: null
        };
    }

    handleSubmit = (event) => {
        event.preventtDefault();
    };

    handleChange = type => (evt) => {   /* handleChange = function handleChange(type) {
                                        return function (evt) {}} */
        const {value} = evt.target; // var value = evt.target.value;
        this.setState({
            [type]: value  /* this.setState(defineProperty({}, type, value)) - определяет новое или изменяет существующее свойство непосредственно на объекте, возвращая этот объект.*/
        })
    };


    handleClick = (e) => {  /*при клике на кнопку добавить, мы получаем данные и отправляем их к родителю наверх. У родителя есть метод addData, и данные станут доступны
                            в качестве аргумента*/
        const comment = this.state;
        e.preventDefault();
        console.log(comment);
        if (comment.author == '' || comment.text == '') {
            alert('Заполните все поля!')
        } else {
            this.props.addData(comment);
        }
    };

    render() {
        return (
            <div>
                <h2>Добавить комментарий</h2>
                <form action="#" onSubmit = {this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="todoAuthor">Ваше Имя:</label>
                        <input
                            type="text"
                            name="author"
                            id="todoAuthor"
                            value = {this.state.author}
                            onChange = {this.handleChange('author')}
                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="todoText">Ваш комментарий:</label>
                        <textarea
                            type="text"
                            name="text"
                            id="todoText"
                            cols="30"
                            rows="10"
                            value={this.state.text}
                            onChange = {this.handleChange('text')}

                        />
                        </div>
                        <Button
                            type="submit"
                            text="Отправить"
                            onClick={this.handleClick}
                        >
                    </Button>
                </form>
            </div>
        );
    }

}

export default Form;