import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';





class DishdetailComponent extends Component {

    renderDish(dish) {
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

    // dateBuilder method is called by renderComments method
    dateBuilder(monthAsNumberString) {
        let monthArray = [];
        monthArray[0] = "Jan";
        monthArray[1] = "Feb";
        monthArray[2] = "Mar";
        monthArray[3] = "Apr";
        monthArray[4] = "May";
        monthArray[5] = "Jun";
        monthArray[6] = "Jul";
        monthArray[7] = "Aug";
        monthArray[8] = "Sep";
        monthArray[9] = "Oct";
        monthArray[10] = "Nov";
        monthArray[11] = "Dec";
        let monthAsNumberInt = parseInt(monthAsNumberString) - 1
        return monthArray[monthAsNumberInt];
    }


    renderComments(dish) {
        if (dish != null) {
            const commentsRaw = dish.comments
            const commentsToPublish = commentsRaw.map(selectedComment => {
                let [year, month, day] = selectedComment.date.slice(0, 10).split("-")
                let finalDate = day + " " + this.dateBuilder(month) + ", " + year
                return (
                    <p>
                        {selectedComment.comment}
                        <br></br>
                        -- {selectedComment.author}, {finalDate}
                    </p>
                )
            })
            return (
                <div>
                    {commentsToPublish}
                </div>
            );
        }
        else
            return (
                <div></div>
            );
    }

    render() {
        return (
            <div className="row text-left">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h1>Comments</h1>
                    <div className='comments-text-modified'>{this.renderComments(this.props.selectedDish)}</div>
                </div>
            </div>
        )
    }
}


export default DishdetailComponent;


