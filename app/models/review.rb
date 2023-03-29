class Review < ApplicationRecord
    belongs_to :user
    belongs_to :cleaner
    # has_many :cleaner_reviews
    # has_many :cleaners, through: :cleaner_reviews
end
