import { Schema, model, models } from 'mongoose';

// -> Create a schema for the database.
const SampleSchema = new Schema ( {

    sampleBoolean: Boolean,
    sampleMessage: String,
    sampleNumber: Number

} );

// ??? Does the model exist within the database? If not, create it.
const Sample = models.Sample || model ( 'Sample', SampleSchema );

export default Sample;