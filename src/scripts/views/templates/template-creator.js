import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" 
       data-src="${CONFIG.BASE_LARGE_IMAGE_URL + restaurant.pictureId}" 
       alt="${restaurant.name}" 
       src="../public/images/placeholder.jpg" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Address : </h4>
    <p>${restaurant.address}</p>
    <h4>City : </h4>
    <p>${restaurant.city}</p>
    <h4>Categories:</h4>
    <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
    <h4>Rating</h4>
    <p>⭐️${restaurant.rating}</p>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__menus">
    <h3>Menus</h3>
    
    <h4>Foods:</h4>
    <ol>
      ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
    </ol>
    
    <h4>Drinks:</h4>
    <ol>
      ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    </ol>
  </div>
  <div class="restaurant__reviews">
    <h3>Customer Reviews</h3>
    ${restaurant.customerReviews.map((review) => `
      <div class="review">
      <div class="review__header">
        <span class="review__name">${review.name}</span>
        <span class="review__date">${review.date}</span>
      </div>
        <p class="review__content">
          ${review.review}
        </p>
      </div>
    `).join('')}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" 
           alt="${restaurant.name || '-'}"
           data-src="${CONFIG.BASE_MEDIUM_IMAGE_URL + restaurant.pictureId}"
           src="../public/images/placeholder.jpg">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
      <p>${restaurant.description || '-'}</p>
      <button class="restaurant-item__detail-button" onclick="window.location.href='/#/detail/${restaurant.id}'">View Details</button>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
