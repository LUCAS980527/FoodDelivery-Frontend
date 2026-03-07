import axios from "@/lib/axios";

export const signUpApi = {
  sendEmail: async ({ email }) => {
    const res = await axios.post("/api/auth/check-email", { email });
    return res.data;
  },

  finishSignup: async ({ email, password }) => {
    const res = await axios.post("/api/auth/sign-up", { email, password });
    return res.data;
  },
};

export const orderApi = {
  createOrder: async ({ user, foodOrderItems, totalPrice, address }) => {
    try {
      const res = await axios.post("/api/orders", {
        user,
        foodOrderItems,
        totalPrice,
        address,
      });
      return res.data;
    } catch (err) {
      const message =
        err?.response?.data?.message || "Захиалга үүсгэхэд алдаа гарлаа";
      throw new Error(message);
    }
  },

  getOrders: async (userId = null) => {
    try {
      const url = userId ? `/api/orders?userId=${userId}` : "/api/orders";
      const res = await axios.get(url);
      return res.data?.data || res.data;
    } catch (err) {
      const message =
        err?.response?.data?.message || "Захиалга авахад алдаа гарлаа";
      throw new Error(message);
    }
  },

  getOrderById: async (orderId) => {
    try {
      const res = await axios.get(`/api/orders/${orderId}`);
      return res.data?.data;
    } catch (err) {
      const message = err?.response?.data?.message || "Захиалга олдсонгүй";
      throw new Error(message);
    }
  },
};
