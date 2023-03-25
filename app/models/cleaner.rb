class Cleaner < ApplicationRecord
    has_many :users
    has_many :reviews, through: :users

    # validations
    # age
    validates :age, presence: true, length: { minimum:20 }
    validates :id_no, presence: true, length: { minimum:10 }
    
end
