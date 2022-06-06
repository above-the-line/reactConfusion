import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Menu from './MenuComponent';
import About from './About';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        console.log(dishId);
        // this.setState({ selectedDish: dishId });
    }

    render() {

        return (
            <div>
                <Header />

                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/aboutus' element={<About />} />
                    <Route path='/menu' element={<Menu dishes={this.state.dishes} onClick={this.onDishSelect} />} />
                    <Route path='*' element={<Home />} />
                    <Route index element={<Home />} />
                </Routes>


                <Footer />
            </div>
        );
    }
}


// <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
// <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />

export default Main;