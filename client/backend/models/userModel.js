import mongoose from 'mongoose';

const UserSchema = mongoose.Schema (
  {
    username: {
      type: String,
      unique: true,
      required: [true, 'Enter your name'],
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test (v);
        },
        message: props => `${props.value} is not a valid email`,
      },
    },
    password: {
      type: String,
      required: true,
    },

    resetToken: {
      type: String,
    },
  },
  {
    TimeStamp: true,
  }
);

// UserSchema.pre("save")
// UserSchema.methods()
export const User = mongoose.model ('user', UserSchema);
