class SessionController < ApplicationController
    def index
        # set cookie
        cookies[:hello_world] ||= "Hello Susan"
        session[:hello_world] ||= "Hello Wotld"
        render json: {cookies: cookies.to_hash}
    end
end
