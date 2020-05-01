import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Icecream',
                    image: 'assets/images/icecream.jpg',
                    category: 'mains',
                    label: 'Cold',
                    price: '30',
                    description: 'Tasty sweet Icecream'
                },
                {
                    id: 1,
                    name: 'Cake',
                    image: 'assets/images/cake.jpg',
                    category: 'mains',
                    label: 'Hot',
                    price: '150',
                    description: 'Tasty sweet Cake'
                },
                {
                    id: 2,
                    name: 'PaniPuri',
                    image: 'assets/images/panipuri.jpg',
                    category: 'mains',
                    label: '',
                    price: '20',
                    description: 'Tasty spicy Panipuri'
                },
                {
                    id: 3,
                    name: 'Pizza',
                    image: 'assets/images/pizza.jpg',
                    category: 'mains',
                    label: 'Hot',
                    price: '300',
                    description: 'Tasty Pizza'
                }
            ]
        }
    }

    render() {

        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media style={{height: '150px', width: '150px'}} object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>
                                {dish.name}
                            </Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;