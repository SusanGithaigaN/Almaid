class ReviewsController < ApplicationController
    protect_from_forgery with: :reset_session
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

    private

    def review_params
        params.require(:review).permit(:review, :rating).merge(user_id: current_user.id)
    end
    
end
