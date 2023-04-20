const { pool } = require("../../config/database");

exports.selectRestaurants = async function (connection, category) {
  const selectAllRestaurantsQuery = `SELECT title, address, placeUrl, category, imageUrl FROM Restaurants where status = 'A';`;
  const selectCategorizedRestaurantsQuery = `SELECT title, address, placeUrl, category, imageUrl FROM Restaurants where status = 'A' and category = ?;`;

  const Params = [category];

  const Query = category 
  ? selectCategorizedRestaurantsQuery 
  : selectAllRestaurantsQuery;

  const rows = await connection.query(Query, Params);

  return rows;
};
