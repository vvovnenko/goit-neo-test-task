import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = async (page, limit, filters) => {
  const params = new URLSearchParams({
    page,
    limit,
    ...filters,
  });

  const { data } = await axios.get(`${BASE_URL}/campers?${params}`);
  return data;
};

export const fetchCamper = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/campers/${id}`);
  return data;
};
