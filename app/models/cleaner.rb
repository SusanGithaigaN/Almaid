class Cleaner < ApplicationRecord
    has_many :reviews
    has_many :bookings
    has_many :users, through: :bookings
    # has_many :users, through: :reviews, source: :user

    # validations
    # # age
    # validates :age, presence: true, length: { minimum:20 }
    # validates :id_no, presence: true, length: { minimum:10 }
    
end
