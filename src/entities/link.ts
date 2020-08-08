import {Document} from 'mongoose'

export type Link = Document & {
  _id: string,
  description: string,
  url: string,
  createdAt?: string,
  updatedAt?: string
}
