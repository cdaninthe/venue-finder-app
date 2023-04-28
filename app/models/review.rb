class Review < ApplicationRecord
    validates :comment, presence:true, length: { minimum: 10, message: "should be at least 10 characters" }
    validates :rating, presence: true, numericality: { only_integer: true, :in => 1..5 }

    belongs_to :user
    belongs_to :venue
end
