class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :bookings

    # has_many :cleaners, through: :reviews
    has_many :cleaners, through: :bookings
end
