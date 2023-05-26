const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, require: true },
    email: {
      type: String,
      require: true,
      unique: true,
      validate: [validator.isEmail, 'Email not valid'],
    },
    password: {
      type: String,
      require: true,
      validate: [validator.isStrongPassword, 'Email not valid'],
      minlength: [8, 'Min 8 characters'],
    },
    gender: { type: String, enum: ['male', 'female'], require: true },
    rol: { type: String, enum: ['admin', 'manager', 'user'], require: true },
    photo: { type: String },
    confirmationCode: { type: String, require: true },
    check: { type: Boolean, default: false },
    projects: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    tasks: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    next('Error hashing password', error);
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
