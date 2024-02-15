import mongoose from 'mongoose';

const MonsterSchema = new mongoose.Schema(
    {
        name:{type: String, required: true},
        imageUrl: {type: String, requried: true},
        email:{type:String, required:true},
        phone:{type:Number, required:true}
    }
)

const Monster = mongoose.model("Monster", MonsterSchema);

export default Monster;