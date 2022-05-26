import React from 'react';
import NavigationBar from './NavigationBar';
import Sidebar from './Sidebar';
import Introduction from './Introduction';
import About from './About';
import Projects from './Projects';
import './App.css';

class App extends React.Component {
  state = { message: 'test' };

  componentDidMount() {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        this.setState({ message: data.message });
      });
  }

  render() {
    return (
      <div className='app-grid'>
        <Sidebar className='item-a' />
        <NavigationBar className='item-b' />
        <div className='main-content item-c'>
          <Introduction />
          <About />
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
