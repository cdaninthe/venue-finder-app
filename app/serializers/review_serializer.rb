class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment

  has_one :user, serializer: ReviewUserSerializer
  has_one :venue, serializer: ReviewVenueSerializer
end
