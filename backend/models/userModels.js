import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,  
    },
    middleName: {
     type: String,
    },
    lastName: {
             type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        minlength: [10, 'Mobile number must be at least 10 characters'],
        maxlength: [10, 'Mobile number must be at most 10 characters']
        
    },
    email: {
        type:String,
        required: true,
            unique:true,   
    },
    dob: {
        type: Date,
        required: true,  
              default: Date.now

    },
    password: {
                type:String,
        required:true,
        
    },
    confirmPassword: {
        type: String,
    },
    pic: {
                type:String,
        
    },
}, {
    timestamps: true,

})


const User = mongoose.model("User", userSchema);


export default User;