import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../../shared/baseUrl';
import "./shop.css";


function RenderDirectoryItem({product}) {
    return (
        <Card>
            <Link to={`/directory/${product.id}`}>
            <CardImg className='my_image' src={baseUrl + product.image} alt={product.name} />
                <CardImgOverlay>
                    <CardTitle>{product.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}






function Directory (props) {
   
    const directory = props.products.products.map(product => {
        return (
            <div key={product.id} className="col-md-5 m-1">
                <RenderDirectoryItem product={product} />
            </div>
        );
    });

    if (props.products.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.products.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.products.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Products</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
        );
    
}

export default Directory;