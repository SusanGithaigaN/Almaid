class UsersController < ApplicationController
    protect_from_forgery with: :reset_session
    before_action :authorize

    # skip signup authorization
    skip_before_action :authorize, only: [:create]
    def index
        users = User.all
        render json: users
    end

    # check specific user
    def show
        render json: {message: "Hello Susan"}
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

    # user authenthorization
    def authorize
        return render json: { message: "To proceed, please Login. "} unless session.include? :user_id
    end

end
