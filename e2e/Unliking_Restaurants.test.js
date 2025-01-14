/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant__title a', 10);
  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  console.log('First Restaurant Title (For Liking):', firstRestaurantTitle);

  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
  console.log('Liked Restaurant Title:', likedRestaurantTitle);

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  const likedRestaurant = locate('.restaurant__title a').first();
  I.click(likedRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
