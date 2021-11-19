import http from "./http-common";

class userAPI {
  login = (data) => {
    return http.post("/user/login", data);
  };

  register = (data) => {
    return http.post("/user/register", data);
  };

  checkUsername = (username) => {
    return http.get(`/user/checkUsername/${username}`);
  };

  addRestaurantToList = (key, user_id, res_id) => {
    return http.post(`/user/add/${key}/${user_id}/${res_id}`);
  };

  removeResFromList = (key, user_id, res_id) => {
    return http.post(`/user/delete/${key}/${user_id}/${res_id}`);
  };

  getMyRestaurantList = (key, user_id) => {
    return http.get(`/user/list/${key}/${user_id}`);
  };

  editMyFavList = (user_id, myFavRestaurants) => {
    console.log("data", myFavRestaurants);
    return http.patch(`/user/editfav/${user_id}`, myFavRestaurants);
  };
}

export default new userAPI();
