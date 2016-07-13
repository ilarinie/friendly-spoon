class Level < ActiveRecord::Base
  has_many :recipes

  def to_s
    level
  end
end
