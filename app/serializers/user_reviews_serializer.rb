class UserReviewsSerializer < ActiveModel::Serializer
  attributes :id, :title, :comment, :space_id, :space

  belongs_to :space
end
