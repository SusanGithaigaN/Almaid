class CleanersController < ApplicationController
    protect_from_forgery with: :reset_session
    def index
        cleaners =Cleaner.all
        render json: cleaners, each_serializer: CleanerSerializer
    end

    # get cleaners and associated reviews
    def summary
        cleaners = Cleaner.includes(cleaner_reviews: :user)
        render json: cleaners, each_serializer: CleanerSerializer
    end

       
    private

    def find_cleaners
        Cleaner.all
    end
end
