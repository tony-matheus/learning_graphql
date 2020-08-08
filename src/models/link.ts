import mongoose from 'mongoose'
import { Link } from '../entities'

const linkSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

linkSchema.statics = {
  get(id: string): Promise<Link> {
    return this.findById(id)
  }
};

export default mongoose.model<Link>('Link', linkSchema);
