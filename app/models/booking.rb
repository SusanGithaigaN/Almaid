class Booking < ApplicationRecord
    belongs_to :user
    belongs_to :cleaner

    # validations
    validates :payment_status, inclusion: { in: [ 'In progress','Pending','Complete' ] }
end
