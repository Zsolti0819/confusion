import React, {Component} from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log('DishDetail Component constructor is invoked');
    };

    renderDish(dish) {
        if (dish != null) {
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
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(dish) {
        return dish.comments.map((cm) => {
            return (
                <div key = {cm.id}>
                    <CardText>{cm.comment}</CardText>
                    <CardText>-- {cm.author}, {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                    }).format(new Date(cm.date))}</CardText>
                </div>
            )
        });
    }

    render() {
        const selected = this.props.selectedDish;

        return (
            <div className="container">
                <div className="row">
                    <div key = {selected.id} className="col-12 col-md-5 m-1">
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
}


export default DishDetail;