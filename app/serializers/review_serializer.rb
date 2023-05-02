class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment

  belongs_to :user, serializer: ReviewUserSerializer
  belongs_to :venue, serializer: ReviewVenueSerializer
end
