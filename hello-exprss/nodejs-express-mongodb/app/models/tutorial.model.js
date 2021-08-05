module.exports = mongoose => {
  console.log(mongoose.title);
  const Tutorial = mongoose.model(
    "tutorial",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean
      },
      { timestamps: true }
      
    )
  );

  return Tutorial;
  
};