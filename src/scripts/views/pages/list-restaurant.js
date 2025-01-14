import TheRestaurantData from '../../data/restaurant-data';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Explore Restaurant</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
        `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantData.listRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ListRestaurant;
