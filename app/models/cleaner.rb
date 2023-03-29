class Cleaner < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    has_many :cleaner_reviews

    # validations
    # age
    # validates :age, presence: true, length: { minimum:20 }
    # validates :id_no, presence: true, length: { minimum:10 }
    
end
