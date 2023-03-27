class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.integer :user_id
      t.integer :cleaner_id
      t.date :start_date
      t.date :end_date
      t.string :payment_status

      t.timestamps
    end
  end
end
