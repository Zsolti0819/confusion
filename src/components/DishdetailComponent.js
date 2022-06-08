import React, { Component } from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log('DishDetail Component constructor is invoked');
    };

    render() {
        const selected = this.props.selectedDish;
        const comment = selected.comments.map((cm) => {
            return (
                <CardText>{cm.comment}</CardText>

            )
        })
        return (
            <div className="container">
                <div className="row">
                    <div key = {selected.id} className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={selected.image} alt={selected.name} />
                            <CardBody>
                                <CardTitle>{selected.name}</CardTitle>
                                <CardText>{selected.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {comment}
                </div>
            </div>

        )
    }
}


export default DishDetail;