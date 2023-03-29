class ApplicationController < ActionController::Base
    include ActionController::Cookies
    
    # create current_user method that stores the current user's session
    helper_method :current_user

    private
  
    def current_user
      @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end    

end
