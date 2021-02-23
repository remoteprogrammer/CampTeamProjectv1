import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import Label from "reactstrap/lib/Label";
import { Loading } from "./LoadingComponent";
import { baseUrl } from '../../shared/baseUrl';
import "./shop.css";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

function RenderProduct({ product }) {
  return (
    <div className="col-md-5 m-1">
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card>
          <CardImg top className='my_image_detail'  src={baseUrl + product.image} alt={product.name} />
          <CardBody>
            <CardText>{product.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    </div>
  );
}

function ProductInfo(props) {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row"></div>
        <Loading />
      </div>
    );
  }
  if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>{props.errMess}</h4>
          </div>
        </div>
      </div>
    );
  }
  if (props.product) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>{props.product.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderProduct product={props.product} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ProductInfo;
