class CreateCleaners < ActiveRecord::Migration[7.0]
  def change
    create_table :cleaners do |t|
      t.string :name
      t.integer :age
      t.integer :phonenumber
      t.integer :id_no
      t.integer :experience
      t.string :image_url

      t.timestamps
    end
  end
end
