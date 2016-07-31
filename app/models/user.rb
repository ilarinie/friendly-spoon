class User < ActiveRecord::Base
    has_secure_password
    has_many :recipes
    has_many :notes

    def to_s
        name
    end

end
