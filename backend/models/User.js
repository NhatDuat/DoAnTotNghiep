import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      default:
        'https://antimatter.vn/wp-content/uploads/2022/11/anh-avatar-trang-fb-mac-dinh.jpg',
    },

    role: {
      type: String,
      default: 'user',
    },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CartUSers' }],
  },
  { timestamps: true }
);

const Users = mongoose.model('User', userSchema);

export default Users;
