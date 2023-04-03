class UsersController < ApplicationController
    protect_from_forgery with: :reset_session
    # before_action :authorize

    # skip signup authorization
    # skip_before_action :authorize, only: [:create, :destroy]
    def index
        users = User.all
        render json: users
    end

    # check specific user
    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :created        
    end

    # POST/create user
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # delete users
    def destroy
        user = find_by_id

        if user
            user.destroy
            render json: { message: "User successfully deleted" }, status: :ok
        else
            render json: { error: "User not found"}, status: :not_found
        end
    end
    
    private

    def user_params
        # User.create(name: params[:name], tel_no: params[:tel_no], email: params[:email], password: params[:password], username: params[:username])
        params.permit(:name, :tel_no, :email, :password, :username)
    end

    # user authenthorization
    def authorize
        return render json: { message: "To proceed, please Login. "} unless session.include? :user_id
    end

    def find_by_id
        User.find_by(id: params[:id])
    end

end
