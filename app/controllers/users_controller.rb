class UsersController < ApplicationController
    protect_from_forgery with: :reset_session
    def index
        return render json: { message: "To proceed, please Login. "} unless session.include? :user_id
        users = User.all
        render json: users
    end


    # POST/create user
    def create
        user = user_params
        render json: user
    end

    private

    def user_params
        User.create(name: params[:name], tel_no: params[:tel_no], email: params[:email], password: params[:password], username: params[:username])
    end

end
