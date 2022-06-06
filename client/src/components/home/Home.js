import React from 'react';
import NavigationBar from './NavigationBar';
import Sidebar from './Sidebar';
import Introduction from './Introduction';
import About from './About';
import Projects from './Projects';
import './Home.css';

class Home extends React.Component {
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
        <Sidebar />
        <NavigationBar />
        <div className='main-content'>
          <Introduction />
          <About />
          <Projects />
        </div>
      </div>
    );
  }
}

export default Home;
