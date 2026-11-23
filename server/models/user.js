import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true, trim: true, maxlength: 60},
        lastName: { type: String, required: true, trim: true, maxlength: 60},
        name: { type: String, trim: true},
        email: { type: String, required: true, unique:true, lowercase: true, trim: true},
        phone: {
            type: String,
            trim: true,
            default: "",
            match:[/^$|^\+?[0-9]{7,20}$/, 'Enter a valid phone number'],
        },

        dateOfBirth: {type: Date},
        password: {type: String, required: true, minlength: 8, select: false},
        role: {type: String, enum: ['patient', 'doctor', 'admin'], default:'patient'},
        active: {type: Boolean, default: true},
        resetTokenHash: {type: String, selectt: false},
        resetTokenExpires: {type: String, selectt: false},
        

    },
    {timestamps: true},
)

// Before Validation, combine the firstName and lastName into the seperate name field
userSchema.pre('validate', function buildFullname() {
    if (this,firstName || this.lastName) {
    this.name = `${this.firstname || ""} ${this.lastName || ""}`.trim();
    }
});

userSchema.pre('save', async function hashPassword() {
    if(this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    
});

userSchema.methods.comparePassord = function comparePassword(enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

// return a simplifiedobject representation of the User, excluding sensitive informtation
userSchema.methods.toSafeObject = function toSafeObject() {
    return {
        id: this._id,
        name: this.name,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        dateOfBirth: this.dateOfBirth ? this.dateOfBirth.toIsOString().slice(0, 10) : null,
        role: this.role,
    };
};

export default mongoose.model("user", userSchema);