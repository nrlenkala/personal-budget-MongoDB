const mongoose = require("mongoose");
const budgetChartSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true,
  },
  relatedValue : {
    type : Number,
    required : true,
  },
  color : {
    type : String,
    required : true,
    validate : {
      validator : function (v) {
        return /^#[0-9A-Fa-f]{6}$/.test(v); 
      },
      message : 'Invalid hexadecimal color format. (eg: #ED4523)',
    },
  },
});


module.exports = mongoose.model('myCollection', budgetChartSchema);