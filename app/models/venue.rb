class Venue < ApplicationRecord
    validates :name, presence: true
    validates :description, presence:true, length: { minimum: 10, message: "should be at least 10 characters" }
    validates :city, presence: true
    validates :state, presence: true
    validates :price, presence:true, numericality: { greater_than: 0, message: "must be greater than 0" }

    
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    # belongs_to :user
    # belongs_to :owner, :class_name => "User"
end
