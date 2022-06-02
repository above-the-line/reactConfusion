import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';



function RenderDish({ dish }) {
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle><h3>{dish.name}</h3></CardTitle>
                    <CardText className='card-text-modified'>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return (
            <div></div>
        );
}


function RenderComments({ comment, author, date }) {
    if (comment != null) {
        return (
            <p>
                {comment}
                <br></br>
                -- {author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(date)))}
            </p>
        )
    } else return (
        <div></div>
    );
}


const DishDetail = (props) => {
    if (props.dish !== undefined) {
        return (
            <div className="container">
                <div className="row text-left">
                    <div className="col-12 col-md-5 m-1">
                        {RenderDish(props)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h1>Comments</h1>
                        {
                            props.dish.comments.map((comment) => {
                                return <div className='comments-text-modified'>{RenderComments(comment)}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    } else return <div></div>
}



export default DishDetail;


