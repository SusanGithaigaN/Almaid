class Cleaner < ApplicationRecord
    has_many :reviews
    has_many :bookings
    has_many :users, through: :bookings
    # has_many :users, through: :reviews, source: :user

    # validations
    # # age
    validates :age, numericality: { greater_than_or_equal_to: 18 }
    validates :id_no, presence: true, length: { minimum:10 }
    
end
