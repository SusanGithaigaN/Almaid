class CleanersController < ApplicationController
    protect_from_forgery with: :reset_session
    # before_action :authorize
    def index
        cleaners =Cleaner.all
        render json: cleaners, each_serializer: CleanerSerializer
    end

    # get cleaners and associated reviews
    def summary
        cleaners = find_cleaners
        render json: cleaners, each_serializer: CleanerSerializer
    end

       
    private

    def find_cleaners
        Cleaner.all
    end
end
