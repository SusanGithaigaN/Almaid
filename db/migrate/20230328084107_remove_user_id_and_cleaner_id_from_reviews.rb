class RemoveUserIdAndCleanerIdFromReviews < ActiveRecord::Migration[7.0]
  def change
    remove_column :reviews, :user_id
    remove_column :reviews, :cleaner_id
  end
end
