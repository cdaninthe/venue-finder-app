class UserReviewsSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :venue_id, :venue

  belongs_to :venue
end
