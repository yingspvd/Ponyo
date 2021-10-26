import express from "express";
import Restaurant from "../models/restaurantModel.js";

const router = express.router;

export const addRestaurant = async (req, res) => {
  const {
    name,
    type,
    description,
    location: { address, postCode, province, ggLink },
    phone,
    priceRange: { min, max },
    OpenHours,
    holiday,
    imageFile,
  } = req.body;

  const newRestaurant = new Restaurant({
    name,
    type,
    description,
    location: { address, postCode, province, ggLink },
    phone,
    priceRange: { min, max },
    OpenHours,
    holiday,
    imageFile,
  });

  try {
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

export const getAllRestaurant = async (req, res) => {
  try {
    const Restaurants = await Restaurant.find();

    res.status(200).json(Restaurants);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
