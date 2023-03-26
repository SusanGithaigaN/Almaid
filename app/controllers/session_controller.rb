class SessionController < ApplicationController
    protect_from_forgery with: :reset_session
    def index
        # set cookie
        cookies[:hello_world] ||= "Hello Susan"
        session[:hello_world] ||= "Hello Wotld"
        render json: {cookies: cookies.to_hash}
    end

    
    # login session
    def create
        user = User.find_by(username: params[:username])
        if user
            session[:user_id] = user.id
            render json: user
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
