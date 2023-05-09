const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    blog_title: String,
    blog_slug: String,
    blog_summary: String,
    blog_keyword:String,
    blog_content:String,
    profile: {
      type: String,
      default: "default.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("dellatecnica_blogs", StudentSchema);
