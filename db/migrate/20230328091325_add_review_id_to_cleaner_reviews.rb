class AddReviewIdToCleanerReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :cleaner_reviews, :review_id, :integer
  end
end
