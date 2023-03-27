class SessionController < ApplicationController
    protect_from_forgery with: :reset_session

    # encode and decode JWT
    def encode_token(payload)
        JWT::encode(payload, "secret")
    end

    # add a request item
    # check if the header is authorized
    def auth_header
        request.header['Authorization']
    end
    
    def decode_token
        if auth_header
            token = auth_header.split(' ')[1]
            begin
            JWT::decode(token, "secret")[0]
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def index
        # set cookie
        cookies[:hello_world] ||= "Hello Susan"
        session[:hello_world] ||= "Hello Wotld"
        render json: {cookies: cookies.to_hash}
    end

    # login session
    def create
        user = User.find_by(username: params[:username])
        if user &.authenticate(params[:password])
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
