import React, { Component } from 'react';
import './App.css';
import Comments from './Comments/Comments.js';
import AddingNewComment from './AddingNewComment/AddingNewComment.js'
import CommentsForm from './CommentsForm/CommentsForm.js'

class App extends Component {

  state={
        comments: [
          {
            id:'1', title:'Probna trka danas',text:'Obavestavamo sve ucesnike da ce se probna trka odrzati 15.02.2025. godine na Cupriji, sa pocetkom u 15h'
          },
          
          {
            id:'2', title:'Glavna trka', text:'Obavestavamo sve ucenike da ce se glavna trka odrzati 18.02.2025. godine na Cupriji, sa pocetkom u 15h'
          },

          {
            id:'3', title:'Sponzori trke',text:'Sponzori trke su Voda Voda, Vlasinska Rosa i Knjaz Milos'
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
    //<AddingNewComment click={()=>this._addingCommentHandler}/>
        
    return (
      <div className="App">
        {comments}
        <CommentsForm click={()=>this._addingCommentHandler}/>
        
      </div>
    );
  }
}

export default App;
