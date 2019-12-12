import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { setBackground } from '../components/Background';
import Scroll from '../components/Scroll';
import './App.css';



class App extends React.Component {
    constructor()
    {
        super();
        this.state ={
            robots: [],
            seachfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ seachfield:  event.target.value });
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
        setBackground();
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.seachfield.toLowerCase())
        })
        
        return(
            <div>
                <h1 className='f1'>Robofriends</h1>
                <input type="button" className="myButton" value="Background" onClick={setBackground} />
                <br />
                <SearchBox  searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots= {filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;