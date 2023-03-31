class ReviewsController < ApplicationController
    protect_from_forgery with: :reset_session
    # before_action :authorize
    def index
        reviews = Review.all
        render json: reviews
    end
    
    def create
        # find cleaner based on their id
        # build a new review for the cleaner
        @cleaner = Cleaner.find(params[:cleaner_id])
        @review = @cleaner.reviews.build(review_params)
        if @review.save
            render json: @review, status: :created
          else
            render json: @review.errors, status: :unprocessable_entity
          end      
    end

    # delete reviews by id
    def delete
        review = find_by_id

        if review
            review.destroy
            render json: { message: "Review successfully deleted" }, status: :ok
        else
            render json: { error: "Review not found" }, status: :not_found
        end
    end

    private

    def review_params
        params.permit(:rating, :review, :cleaner_id, :user_id)
    end

    def find_by_id
        Review.find_by(id: params[:id])
    end

    
end
