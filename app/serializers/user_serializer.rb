class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :spaces, serializer: UserVenuesSerializer
  has_many :reviews, serializer: UserReviewsSerializer
end
