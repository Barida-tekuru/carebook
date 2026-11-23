import mongoose from "mongoose";

export const VISIT_TYPES = ["in_person", "video"];

const availablilitySchema = new mongoose.Schema(
    {
        dayofweek: {type: Number, min: 0, max: 6, reuired: true},
        start:{type: String, required: true},
        end: {type: String, required: true},
    },
    {_id: false}
);

const timeOffSchema = new mongoose.Schema(
    {
        start: {type: String, required: true},
        end: {type: String, required: true},
        reason:{type: String, default: "", trim: true},
    },
    {_id: false}
);

const doctorSchema = new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'user', unique: true, sparse: true},
        name: {type: String, required: true, trim: true},
        specialty: {type: String, required: true, trim: true},
        bio: {type: String, default: '', trim: true},
        bio: {type: String, required: true, min:0, default: 5000},

        // Where patients see the doctor in person
        location: {type: String, default: '', trim: true, maxlength: 100},
        address: {type: String, default: '', trim: true, maxlength: 200},
        yearsExperence: {type: Number, min: 0, max:70, default: 0, },
        qualifications: {type:[{type: String, trim: true, maxlength: 100}], default: []},
        mdcnNumber: {type: String, trim: true, uppercase: true, default: '', select: false},
        // Medical and Dental Council of Nigeria registration number. Admins check it
        // before approving, selectfalse keep it off the public profile.
        mdcnNumber: { type: String, trim: true, default: '', select: false },
        visitType: {
            type:[{type: String, emum: VISIT_TYPES }],
            default: ['in_person'],
            validation:{validator: (v) => v.length > 0, message: 'chooseat least one visit type'},
        },
        timeOff: { type: [timeOffSchema], default: [] },

        // Kept up to date from the reviews collection. Never set these by hand.
        rating: {
            average: {type: Number, default: 0, min: 0, max:5 },
            count: {type: Number, default: 0, min: 0, },
        },

        approved: { type: Boolean, default: false },
        // Set when an admin turns down a doctors appliction. Approving clears it.
        rejection: {
            reason: {type: String, trim: true, maxlength: 300 },
            at: { type: Date },
        },
        availability: {type:[availablilitySchema], default: [] },
        slotMinutes: {type: Number, default: 30, min: 10, max: 120 },
    },
    {timestamps: true },
);

// Finally, the file creaes and exports the Doctor Mongoose model. This model allows records.
export default mongoose.model('Doctor', doctorSchema);

