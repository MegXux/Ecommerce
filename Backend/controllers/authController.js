require("dotenv").config();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.postSignUp = async (req, res) => {
  const { name, email, password, cart = [] } = req.body;
  try {
    const checkExisting = await User.findOne({ email });
    if (checkExisting)
      return res
        .status(409)
        .json({ message: "Email has been already registered" });
    const newUser = new User({ name, email, password, cart });
    await newUser.save();

    // Generate Jwt token
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.status(201).json({
      message: "SignUp successful",
      token,
      user: { id: newUser._id, name, email, cart: newUser.cart },
    });
  } catch (err) {
    res.status(500).json({ message: "Sign up has been failed", error: err.message });
  }
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  try{

      const user = await User.findOne({ email, password });
      if (!user || user.password !== password) {
          return res.status(409).json({ messaege: "Invalid credentials" });
        }
        
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                cart: user.cart, 
            },
        });
    }catch(err){
        res.status(500).json({message: "Login Failed", error: err.message})
    }
};
