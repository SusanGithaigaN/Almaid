class ChangeUserTelToString < ActiveRecord::Migration[7.0]
  def change
    change_column :users, :tel_no, :string
  end
end
