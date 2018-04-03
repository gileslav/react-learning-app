import React, { Component } from 'react';
import './App.css';
import Comments from './Comments/Comments.js';
import AddingNewComment from './AddingNewComment/AddingNewComment.js'
import CommentsForm from './CommentsForm/CommentsForm.js'

class App extends Component {

  state={
        comments: [
          {
            id:'1', text:'Obavestavamo sve ucesnike da ce se probna trka odrzati 15.02.2025. godine na Cupriji, sa pocetkom u 15h'
          },
          
          {
            id:'2', text:'Obavestavamo sve ucenike da ce se glavna trka odrzati 18.02.2025. godine na Cupriji, sa pocetkom u 15h'
          },

          {
            id:'3', text:'Sponzori trke su Voda Voda, Vlasinska Rosa i Knjaz Milos'
          }
        ]
      };

 
  _addingCommentHandler = ()=>{
    console.log('Probni');
    this.setState(
            
                {comments: [
                          {
                            id:1, text:'Proba'
                          },
                          
                          {
                            id:2, text:'Aloha'
                          },

                          {
                            id:3, text:'Lele'
                          }
                        ]}
            )
  }
  
  _editingCommentHandler = () => {
    let oldComments = [...this.state.comments];
    let newComment = document.getElementById("myInput").value;
    oldComments.push({id:oldComments.length,text:newComment});
    this.setState({comments:oldComments})
    document.getElementById("myInput").value = "";
  }

 

  render() {

     let comments=null;

     comments = (
       <div>
         {this.state.comments.map((comment, index)=>{
         return<Comments
                  text={comment.text}
                  key={index}
                  />
         })}
        </div>
     )
        
    return (
      <div className="App">
        {comments}
        <CommentsForm click={this._editingCommentHandler}/>
       
      </div>
    );
  }
}

export default App;
