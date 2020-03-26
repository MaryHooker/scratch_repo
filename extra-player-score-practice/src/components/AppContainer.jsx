import React,{Component} from 'react';
import Player from './Player';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lastClicked: '',
            totalClicks: 0,
                 }
    }
    //This will be called when some player instance scores a hit
    scoredHit = (playerWhoHit, currentScore) =>{
        //update total clicks by one everytime button is clicked
        this.setState(
            {
                totalClicks: this.state.totalClicks + 1
            }
        )
        this.setState(
            {
                lastClicked: playerWhoHit
            }
        )
    }

    render() { 
        return ( 
            <div>
                <h1>Player App</h1>
                <h2>Total Clicks: {this.state.totalClicks}</h2>
                <h2>{this.state.lastClicked} clicked the button last</h2>
                <Player whoAmI='Mary' scoredHit={this.scoredHit}/>
                <Player whoAmI='Charlie' scoredHit={this.scoredHit}/>
                <Player whoAmI='Billy' scoredHit={this.scoredHit}/>
                <Player whoAmI='Molly' scoredHit={this.scoredHit}/>
               
            </div>
         );
    }
}
 
export default AppContainer;