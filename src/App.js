import React ,{Component} from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Action from './components/Action';
import Subject from './components/Subject.js';
import './App.css';




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mode:'welcome',
      subject:{title:'WEB', sub:'World wide web'},
      welcome:{title:'Welcome', desc:'Hello React!!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'Javascript', desc:'Javascript is for interactive'}
      ]
    }
  }
  render(){  
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }








    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
        <Action title="React" desc="React is best in the world!"></Action>
      </div>
    );
  }
}
export default App;
