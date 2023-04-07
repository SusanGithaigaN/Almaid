class BookingsController < ApplicationController
    protect_from_forgery with: :reset_session
    before_action :authorize
    
    def create
        booking = Booking.new(booking_params)

        if booking.save
            render json: booking
        else
            render json: { errors: "Validation errors"}, status: :unprocessable_entity
        end
    end


    private

    def booking_params
        params.permit(:user_id, :cleaner_id, :start_date, :end_date, :payment_status)
    end

end
