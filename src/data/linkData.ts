import LinkModel from '../models/link'

export const createLink = (link: { description: string, url: string }) => {
  return LinkModel.create(link)
}

export const updateLink = (linkId: string, link: { description: string, url: string }) => {
  return LinkModel.findOneAndUpdate({ id: linkId }, link, { new: true })
}

export const deleteLink = (linkId: string) => {
  return LinkModel.deleteOne({ id: linkId })
}

export const getAllLinks = () => {
  return LinkModel.find()
}

export const findLink = (linkId: string) => {
  return LinkModel.findById(linkId)
}
