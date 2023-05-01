class User < ApplicationRecord
    validates :username, presence: true
    validates :password, length: { minimum: 8, message: 'should be at least 8 characters' }, confirmation: true
    validates :password_confirmation, presence: true 
    
    has_secure_password

    has_many :venues, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_many :venues, through: :reviews
end
