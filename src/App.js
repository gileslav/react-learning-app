import React, { Component } from 'react';
import './App.css';
import Comments from './Comments/Comments.js';
import AddingNewComment from './AddingNewComment/AddingNewComment.js'

class App extends Component {

  state={
        comments: [
          {
            id:'1', title:'probni',text:'Lelenovi tup'
          },
          
          {
            id:'2', title:'dvostruki',text:'Glavni sastojci u mesu'
          },

          {
            id:'3', title:'poslednji',text:'Glengeri glen up'
          }
        ]
      };

 

  _addingCommentHandler= () =>{
    let commentsNew = [...this.state.comments];
    commentsNew.push({title:document.getElementById('titleAdding').value,text:document.getElementById('textAdding').value});
    this.setState({comments:commentsNew});
    console.log('here is updated');
  }

  render() {

    let comments=null;

    comments = (
      <div>
        {this.state.comments.map((comment, index)=>{
          return<Comments
                title={comment.title}
                text={comment.text}
                key={comment.id}
                />
        })}
      </div>
    )
    
    return (
      <div className="App">
        {comments}
        <AddingNewComment click={()=>this._addingCommentHandler}/>
      </div>
    );
  }
}

export default App;
