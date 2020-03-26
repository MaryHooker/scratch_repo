import React,{Component} from 'react';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            whoAmI: this.props.whoAmI,
            currentPlayerScore: 0,
         }
    }

    handleButton = () =>{
        this.setState(
            {
                currentPlayerScore:this.state.currentPlayerScore + 1
            }
        )
        this.props.scoredHit(this.state.whoAmI, this.state.currentPlayerScore)
    }

    render() { 
        return ( 
            <div>
                <h2>Player {this.props.whoAmI}</h2>
                <h2>Score: {this.state.currentPlayerScore}</h2>
                <button onClick={this.handleButton}>Hit Me!</button>
            </div>
         );
    }
}
 
export default Player;