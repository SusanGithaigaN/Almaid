class SessionsController < ApplicationController
    protect_from_forgery with: :reset_session
    skip_before_action :authorize, only: [:create]

    def index
        # set cookie
        cookies[:hello_world] ||= "Hello Susan"
        session[:hello_world] ||= "Hello World"
        render json: {cookies: cookies.to_hash}
    end

    # login session
    def create
        user = User.find_by(username: params[:username])
        if user &.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid Username or Password" }, status: :unprocessable_entity
        end
    end

    # logout session
    def destroy
        session.delete(:user_id)
        head :no_content
    end

    private
    
    def find_user
        
    end

end
