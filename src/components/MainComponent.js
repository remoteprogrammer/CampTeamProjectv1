import React, { Component } from "react";
import AboutComponent from '../pages/about/AboutComponent.js'
import ContactComponent from '../pages/contact/ContactComponent.js'
import FooterComponent from './FooterComponent.js'
import HeaderComponent from './HeaderComponent.js'
import HomeComponent from './HomeComponent.js'
import {BrowserRouter as Router, Switch, Route, Redirect, withRouter} from 'react-router-dom'
import Directory from "../pages/shop/DirectoryComponent";
import DirectoryBackPack from "../pages/shop/DirectoryComponentBP";
import DirectorySleepingBags from "../pages/shop/DirectoryComponentSB";
import DirectoryTents from "../pages/shop/DirectoryComponentTents";
import ProductInfo from "../pages/shop/ProductInfoComponent";
import NewArrivals from './NewArrivals/NewArrivals'
import Hero from './Hero/Hero'
import Cart from '../pages/cart/Cart.js'
import { render } from '@testing-library/react'
import { connect } from "react-redux";
import {fetchProducts} from "../redux/ActionCreators";




const mapStateToProps = (state) => {
    return {
      products: state.products,
      };
  };

  const mapDispatchToProps = {
    
    fetchProducts: () => fetchProducts(),
     
  };


  class MainComponent extends Component {
    componentDidMount() {
      this.props.fetchProducts();
    }
  
    render() {
      const HomePage = () => {
        return (
          {/* <Home
            campsite={
              this.props.campsites.campsites.filter(
                (campsite) => campsite.featured
              )[0]
            }
            campsitesLoading={this.props.campsites.isLoading}
            campsitesErrMess={this.props.campsites.errMess}
            promotion={
              this.props.promotions.promotions.filter(
                (promotion) => promotion.featured
              )[0]
            }
            promotionLoading={this.props.promotions.isLoading}
            promotionErrMess={this.props.promotions.errMess}
            partners={
              this.props.partners.partners.filter(
                (partners) => partners.featured
              )[0]
            }
            partnersLoading={this.props.partners.isLoading}
            partnersErrMess={this.props.partners.errMess}
          /> */}
        );
      };
  
      const ProductWithId = ({ match }) => {
        return (
          <ProductInfo
            product={
              this.props.products.products.filter(
                (product) => product.id === +match.params.productId
              )[0]
            }
            isLoading={this.props.products.isLoading}
            errMess={this.props.products.errMess}
            /* comments={this.props.comments.comments.filter(
              (comment) => comment.productId === +match.params.productId
            )}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment} */
          />
        );
      };
  
      return (
        <div>
          <HeaderComponent />
          
              <Switch>
              <Route exact path="/home" component={HomeComponent} />
                <Route
                  exact
                  path="/directory"
                  render={() => <Directory products={this.props.products} />}
                />
                 <Route
                  exact
                  path="/directoryBackPack"
                  render={() => <DirectoryBackPack products={this.props.products} />}
                />
                 <Route
                  exact
                  path="/directorySleepingBags"
                  render={() => <DirectorySleepingBags products={this.props.products} />}
                />
                 <Route
                  exact
                  path="/directoryTents"
                  render={() => <DirectoryTents products={this.props.products} />}
                />
                 
                <Route path="/directory/:productId" component={ProductWithId} />
                <Route exact path="/about" component={AboutComponent} />
            <Route exact path="/contact" component={ContactComponent} />
            <Route exact path="/shop" component={NewArrivals} />
            <Route exact path="/shop" component={Hero} />
            <Route exact path="/cart" component={Cart} />
                <Redirect to="/home" />
              </Switch>
            
          <FooterComponent />
        </div>
      );
    }
  }

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));








