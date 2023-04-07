class AdminSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :phonenumber, :address
end
