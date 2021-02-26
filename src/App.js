import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Tablist from './component/tablist'
import Body from './component/body'

class App extends Component {
  constructor() {
    super();
    this.state = {
      active :1
    }

    this.changetab = (id) => {
      this.setState({active :id})
    }

  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll);
  }

  scroll() {
    var topb = document.getElementById("topbutton");
    var h =document.body.scrollHeight/4.0;
    if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
      topb.style.display = "block";
    } else {
      topb.style.display = "none";
    }
  }

  scrolltotop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    const tabs = [
      {id:1, title: 'Text'},
      {id:2, title: 'Image'},
      {id:3, title: 'Video'},
      {id:4, title: 'Table'},
      {id:5, title: 'Email'}
    ]

    return (
      <div className="App">
        <div className="nav-bar">
        <Tablist tabs={tabs} activetab={this.state.active} ctab={this.changetab}/>
        </div>
        <div className="main-body">
        <Body activetab={this.state.active}/>
        </div>
        <button onClick={this.scrolltotop} id="topbutton" title="Back to top">Back to top</button>
      </div>
    );
  }
}

export default App;
