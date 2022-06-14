import React, {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )

    }

    renderComments(dish) {
        return dish.comments.map((cm) => {
            return (
                <div>
                    <CardText>{cm.comment}</CardText>
                    <CardText>-- {cm.author}, {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                    }).format(new Date(cm.date))}</CardText>
                </div>
            )
        });
    }

    render() {

        if (this.props.dish != null) {
            const selected = this.props.dish;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(selected)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4><b>Comments</b></h4>
                            {this.renderComments(selected)}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (<div></div>);
        }
    }
}


export default DishDetail;