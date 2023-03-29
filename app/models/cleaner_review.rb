class CleanerReview < ApplicationRecord
    belongs_to :cleaner
    belongs_to :review
    belongs_to :user
    
end
