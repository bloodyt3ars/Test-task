import React from 'react';
import axios from 'axios';

export default class PersonAdd extends React.Component {
    constructor(probs){
        super(probs)
        this.state = {
            title: "",
            company: "",
            salary: "",
            description: ""
        }
    }


  handleSubmit = event => {
    event.preventDefault();

    const vacancy = {
        title: this.state.title,
        company: this.state.company,
        salary: this.state.salary,
        description: this.state.description
    };

    axios.post('/api/vacancies/', { vacancy })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Название:
            <input type="text" name="title" onChange={(event)=> this.setState({title: event.target.value})} />
          </label>
          <label>
            Компания:
            <input type="text" name="company" onChange={(event)=> this.setState({company: event.target.value})} />
          </label>
          <label>
            Зарплата:
            <input type="integer" name="name" onChange={(event)=> this.setState({salary: event.target.value})} />
          </label>
          <label>
            Описание:
            <textarea type="text" name="description" onChange={(event)=> this.setState({description: event.target.value})} />
          </label>
          <button type="submit">Добавить</button>
        </form>
      </div>
    )
  }
}


