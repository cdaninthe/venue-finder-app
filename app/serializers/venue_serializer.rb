class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :description, :price, :image_url
  
  # has_one :user
  has_many :reviews
  has_many :users
end
