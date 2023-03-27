class ChangeReviewsDataType < ActiveRecord::Migration[7.0]
  def change
    change_column :reviews, :review, :string
  end
end
