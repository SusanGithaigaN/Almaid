class User < ApplicationRecord
    has_secure_password
    has_many :cleaners
    has_many :reviews
end
