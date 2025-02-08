import User from "../models/userModels.js"
import generateToken from "../config/generateToken.js";

export const userRegister = async (req, res) => {
        const { firstName, middlename, lastName, password, pic, mobile, email, dob } = req.body;
        

        if (!firstName || !lastName || !password || !mobile || !email || !dob) {
            throw new Error("Please provide all the fields");
        }


        const mailExist = await User.findOne({ email });
        if (mailExist) {
        return res.status(400).json({ message: "Email already registered" });
           
    }
    

    const PhoneExist = await User.findOne({ mobile });
    
        if (PhoneExist) {
            res.status(400);
      return res.status(400).json({ message: "Phone number already registered" });
        }

    const user = await User.create({
        firstName,
        middlename,
        lastName,
        email,
        mobile,
        password,
        dob,
        pic
    });


        if (user) {
            res.status(201).json({
                _id: user._id,
                firstName: user.firstName,
                middleName: user.middleName,
                lastName: user.lastName,
                email: user.email,
                mobile: user.mobile,
                dob: user.dob,
                pic: user.pic,
                token: generateToken(user._id)
            });
        }
        else {
            res.status(400);
            throw new Error("Failed to register the user");
        }



    } 
    
