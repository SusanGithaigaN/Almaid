class CreateCleanerReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :cleaner_reviews do |t|
      t.integer :cleaner_id
      t.integer :user_id
      t.boolean :teachable

      t.timestamps
    end
  end
end
