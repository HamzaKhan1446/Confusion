import React, {Component} from 'react';
import {Card, CardImg, CardText, CardTitle, CardBody} from 'reactstrap';
import './Dishdetail.css';

class Dishdetail extends Component{

    renderComments(dish){
        let comments=dish.comments;
        if(comments!=null){

         
            let cmnts= comments.map((comment)=>{

                return(
                    <div className="comments">
                    <li key={comment.id}>
                    <p>{comment.comment}</p>
                <p>-- {comments.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                    </div>
                );
            });
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {cmnts}
                    </ul>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderDish(dish){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    render(){
        const dish=this.props.dish;
        if(dish!=null){
            const dishItem = this.renderDish(this.props.dish);
            const commentItem  = this.renderComments(dish);
          
            return(
                <div className="container">
                <div className="row">
                    {dishItem}
                    {commentItem}
                </div>
                </div>    
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
}

export default Dishdetail;