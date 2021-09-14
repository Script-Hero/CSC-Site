import React from 'react';
import './card-styles.css';


export default class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {title:props.title, body:props.body, color: props.color ? props.color : 'navy', c:this.props.c}
        // expect props of color, title, and body
    }
    render(){
        return (
            <div class={'card' + ' ' + this.props.c} key={this.state.color} style={{'backgroundColor':this.state.color}}>
                <h1 key={this.state.title}class='card-header'>{this.state.title}</h1>
                <p key={this.state.body} class='card-desc'>{this.state.body}</p>
            </div>
        )
    }
}