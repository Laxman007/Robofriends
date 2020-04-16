import React from 'react';
import SearchBox from './SearchBox'
import CardList from './CardList';
import './App.css';
import Scroll from './Scroll';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(Response=>{
           return  Response.json();
        }).then(users=>{
            this.setState({robots:users});
        });
        
    }
    onSearchChange=(event)=>{
            this.setState( { searchfield :event.target.value});
            
    }
    render(){
        const filtetredRobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filtetredRobots);
        return(
            <div className='tc'>
                <h1 className='f2'>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filtetredRobots} />
                </Scroll>
            </div>
        );
    }
    
}

export default App;