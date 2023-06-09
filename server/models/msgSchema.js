const mongoose=require('mongoose');

const msgSchema=new mongoose.Schema({
    surname:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
        unique:true
    },
    middle:{
        type:String,
        require:true,
    },
    age:{
        type:String,
        require:true,
    },
    dob:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    },
    mobile:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        unique:true
    },
    district:{
        type:String,
        require:true,
    },
    state:{
        type:String,
        require:true,
    },
    country:{
        type:String,
        require:true,
    },
    scholarcategory:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    bankname:{
        type:String,
        require:true,
    },
    branch:{
        type:String,
        require:true,
    },
    aadhar:{
        type:String,
        require:true,
    },
    accountnumber:{
        type:String,
        require:true,
    },
    college:{
        type:String,
        require:true,
    },
    degree:{
        type:String,
        require:true,
    },
    cgp:{
        type:String,
        require:true,
    },
    income:{
        type:String,
        require:true,
    },

    message:{
        type:String,
        require:true
    }
})
//create model
const Message=new mongoose.model("MESSAGE",msgSchema);
module.exports=Message;