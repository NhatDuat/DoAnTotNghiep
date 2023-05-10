import Carts from '../models/Cart.js';
const CartController = {
  addToCart: async (req, res) => {
    try {
      const newCart = new Carts(req.body);
      const save = await newCart.save();
      res.status(200).json(save);
    } catch (error) {
      console.log('err: ', error);
      res.status(404).json(error);
    }
  },
  getbyUserId: async (req, res) => {
    try {
      const data = await Carts.find({ userID: req.params.id }).populate(
        'productID'
      );
      res.status(200).json({ stt: 200, data: data });
    } catch (error) {
      console.log(error);
      res.status(404).json(error);
    }
  },
  DeleteFromCart: async (req, res) => {
    try {
      await Carts.findByIdAndDelete(req.params.id);
      res.status(200).json('Delete successfully!');
    } catch (error) {
      res.status(404).json(error);
    }
  },
};

export default CartController;
