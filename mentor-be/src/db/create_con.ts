import mongoose from 'mongoose';

export default async function create_db_con(url: string) {
  try {
    await mongoose.connect(url);
  } catch (error) {
    throw new Error(error);
  }
}
