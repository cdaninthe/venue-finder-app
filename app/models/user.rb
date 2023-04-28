class User < ApplicationRecord
    validates :username, presence: true
    validates :password, length: { minimum: 8, message: 'should be at least 8 characters' } 
    
    has_secure_password

    has_many :venues
    has_many :reviews
    has_many :venues, through: :reviews
end
