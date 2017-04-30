import React, {Component} from 'react';
import axios from 'axios';

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width='75' src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: '10px'}}>
        {props.name}
        <div>{props.company}</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  );
}
// ... is spread operator that make all the card properties available in props

// creating a class component to change state
class Form extends Component {
  state = {userName : ''}
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName);
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        // console.log(resp);
        this.props.onSubmit(resp.data);
        this.setState({userName : ''});
      });
  };
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.userName} onChange={(event) => this.setState({userName: event.target.value})}/>
          <button type="submit">Add Card </button>
        </form>
    );
  }
}

class GitCard extends Component {
    state = {
      cards: [
          {
            name: 'Chandan Singh',
            avatar_url: 'https://avatars0.githubusercontent.com/u/6929170?v=3',
            company: 'Commvault'
          }
      ]
    };
    addNewCard = (cardInfo) => {
      this.setState(prevState => ({
          cards: prevState.cards.concat(cardInfo)
      }));
    };
    render() {
      return (
        <div>
          <Form onSubmit={this.addNewCard}/>
          <CardList cards = {this.state.cards} />
        </div>
      )
    };
};

export default GitCard;
