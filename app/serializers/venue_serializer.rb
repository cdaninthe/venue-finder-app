class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :description, :price, :image_url, :user_id
  
  has_one :user
end
