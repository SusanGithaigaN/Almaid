class CleanersController < ApplicationController
    protect_from_forgery with: :reset_session
    # before_action :authorize, only: [:index, :create]
    def index
        cleaners =Cleaner.all
        render json: cleaners, each_serializer: CleanerSerializer
    end

    # get cleaners and associated reviews
    def summary
        cleaners = find_cleaners
        render json: cleaners, each_serializer: CleanerSerializer
    end

    # create cleaners
    def create
        cleaner = Cleaner.create!(cleaner_params)
        render json: cleaner, status: :created
    end

    def destroy
        cleaner = find_by_id

        if cleaner
            cleaner.destroy
            render json: { message: "Cleaner successfully deleted" }, status: :ok
        else
            render json: { error: "Cleaner not found"}, status: :not_found
        end
    end
       
    private

    def find_cleaners
        Cleaner.all
    end

    def cleaner_params
        params.permit(:name, :age, :phonenumber, :id_no, :image_url, :experience)
    end

    def find_by_id
        Cleaner.find_by(id: params[:id])
    end

end
