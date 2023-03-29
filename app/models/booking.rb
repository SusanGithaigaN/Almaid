class Booking < ApplicationRecord
    belongs_to :user
    belongs_to :cleaner

    # # validations
    validates :payment_status, inclusion: { in: [ 'In progress','Pending','Complete' ] }
    
    # validate booking period
    validate :validate_booking_period

    def validate_booking_period
        if start_date && end_date && (end_date - start_date).to_i < 7
            errors.add(:end_date, "Must be at least 7 days from the start date")
        end
    # end

end
