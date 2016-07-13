class Unit < ActiveRecord::Base
  has_many :recipe_ingredients

  def to_s
    name
  end
end
