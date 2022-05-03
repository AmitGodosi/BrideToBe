// Requiring Package
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
// Require Models
const authRoutes = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose.connect(
    process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to MongoDB");
    }
);

app.use(
    cors({
        origin: "*",
        credentials: true,
        optionSuccessStatus: 200,
    })
);

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT} !`);
});
// app.get("/", function(req, res) {
//     ejs.renderFile("view/home.ejs", {}, {}, function(err, template) {
//         if (err) {
//             throw err;
//         } else {
//             res.end(template);
//         }
//     });
// });

// mongoose
//     .connect(
//         `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.sgyui.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`
//     )
//     .then(() => {
//         app.listen(port, function(error) {
//             if (error) console.error(error);
//             else console.log("Server is running with mongoDB");
//         });
//     })
//     .catch((err) => console.error(err));

// app.get("/Signin", function(req, res) {
//     // Render page using renderFile methodsdsdsss
//     ejs.renderFile("view/signin.ejs", {}, {}, function(err, template) {
//         if (err) {
//             throw err;
//         } else {
//             res.end(template);
//         }
//     });
// });

// app.get("/Signup", function(req, res) {
//     // Render page using renderFile methodsdsdsss
//     ejs.renderFile("view/signup.ejs", {}, {}, function(err, template) {
//         if (err) {
//             throw err;
//         } else {
//             res.end(template);
//         }
//     });
// });

// app.get("/AboutUs", function(req, res) {
//     // Render page using renderFile methodsdsdsss
//     ejs.renderFile("view/about.ejs", {}, {}, function(err, template) {
//         if (err) {
//             throw err;
//         } else {
//             res.end(template);
//         }
//     });
// });

// app.post("/client-signup", async(req, res, next) => {
//     const { full_name, phone_number, email, password } = req.body;

//     try {
//         const isUserExists = await Client.findOne({
//             email: email.toLowerCase().trim(),
//         }).exec();

//         if (isUserExists) {
//             res.status(400).json("user already exists");
//             return;
//         }

//         // hashing password
//         let hashPassword;
//         try {
//             hashPassword = await hash(password, 10);
//         } catch (err) {
//             res.status(500).json({ msg: "hash passwrod error", err });
//             // return next(new HttpError(errorMessages.INTERNAL_SERVER_ERROR, 500));
//         }

//         // creatinn user document with mongoose scheme
//         const new_client = new Client({
//             full_name: full_name.toLowerCase().trim(),
//             phone_number,
//             email: email.toLowerCase().trim(),
//             password: hashPassword,
//         });

//         const createdUser = await new_client.save();
//         // req.flash('success', 'Welcome to Yelp Camp!');
//         // res.redirect('/Signup');

//         console.log(">> User created");
//         res.status(200).json({ user: createdUser, msg: "Success" });
//     } catch (err) {
//         res.status(500).json({ msg: "Error creating user", err });
//     }
// });

// app.post("/client-login", async(req, res, next) => {
//     const { email, password } = req.body;
//     try {
//         const userExists = await Client.findOne({ email }).exec();
//         // found no client
//         if (!userExists) {
//             res.render("login", { msg: req.flash("message") });
//             // return ejs.renderFile(
//             //     "view/errorSignin.ejs", { error: "User doesn`t exist!" }, {},
//             //     function(err, template) {
//             //         if (err) {
//             //             throw err;
//             //         } else {
//             //             res.end(template);
//             //         }
//             //     }
//             // );
//         }
//         const isPassowrdsEquals = await compare(password, userExists.password);
//         if (!isPassowrdsEquals) {
//             return ejs.renderFile(
//                 "view/errorSignin.ejs", { error: "Password is incorrect!" }, {},
//                 function(err, template) {
//                     if (err) {
//                         throw err;
//                     } else {
//                         res.end(template);
//                     }
//                 }
//             );
//         }
//         // create jwt for auth user with user id
//         let token;
//         try {
//             token = await jwt.sign({ id: userExists._id }, process.env.JWT_SECRET);
//         } catch (err) {
//             res.status(500).json("Error");
//         }
//         // res.json({ token });
//         localStorage.setItem("user", userExists);
//         ejs.renderFile("view/home.ejs", {}, {}, function(err, template) {
//             if (err) {
//                 throw err;
//             } else {
//                 res.end(template);
//             }
//         });
//     } catch (err) {
//         res.status(500).json({ msg: "Error ", err });
//     }
// });