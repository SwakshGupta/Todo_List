// here we will define the model for todo

const { Schema, model } = require("mongoose");

const TodoSchema = new Schema(
  {
    Title: {
      type: String,
      required: true,
    },

    Text: {
      type: String,
      required: true,
    },

    Completed: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

const TODO = model("TODO", TodoSchema); // here we have created the model for the TODO

module.exports = TODO;
