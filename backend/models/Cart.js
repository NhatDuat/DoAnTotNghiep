import mongoose from 'mongoose';
const CartShema = new mongoose.Schema({
  userID: {
    type: String,
    require: true,
  },
  productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Fruit' },
});

let Carts = mongoose.model('Cart', CartShema);

export default Carts;
