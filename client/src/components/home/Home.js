import React from 'react';
import Sidebar from './Sidebar';
import NavigationBar from './NavigationBar';
import Introduction from './Introduction';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
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
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default Home;
