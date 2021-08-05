module.exports = mongoose => {
  const Tutorial = mongoose.model(
    "tutorial",
    mongoose.Schema(
      {
        name: String,
        X: String,
        Y: String
      },
      { timestamps: true }
      
    )
  );

  return Tutorial;
  
};