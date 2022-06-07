import React, { Component } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './Home';
import Menu from './MenuComponent';
import About from './About';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            selectedDish: null
        };
    }

    onDishSelect = (dishId) => {
        // console.log(dishId);
        this.setState({ selectedDish: dishId });
    }



    render() {


        const DishWithId = () => {
            const { dishId } = useParams();
            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))} />
            );
        };

        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }


        return (
            <div>
                <Header />

                <Routes>
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/aboutus' element={<About props={this.state} />} />
                    <Route path='/contactus' element={<Contact />} />
                    <Route path='/menu' element={<Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' element={<DishWithId />} />
                    <Route path='*' element={<HomePage />} />
                    <Route index element={<HomePage />} />
                </Routes>


                <Footer />
            </div>
        );
    }
}



export default Main;