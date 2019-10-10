// Setting up

const mongoose = require('mongoose')
const validate = require('validator')


// 127.0.0.1:27017 -> always prefer to hardcode local ip, because mongodb show problems with 'localhost'
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})

// MODELLING
const User = mongoose.model('User',{
    name:{
        type: String,
        required: true,
        trim:true
    },
    age:{
        type: Number,
        default: 0,
        validate(value) {
            if(value<0) {
                throw new Error('Age can\'t be negative!');
            }
        }
    },
    email:{
        type: String,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email format')
            }
        }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password can\'t contain \'password\'')
            }
        }
    }
})

// Creating instance of model
const me = new User({
    name: 'Hrugved Wath',
    age: 17,
    email: 'hvvw@gmail.com',
    password: 'password'
})
