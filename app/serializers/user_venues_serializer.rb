class UserVenuesSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :price, :image_url
end
