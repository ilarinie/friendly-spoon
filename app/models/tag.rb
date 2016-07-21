class Tag < ActiveRecord::Base
  has_many :recipe_tags
  has_many :recipes, through: :recipe_tags

  def to_s
    title
  end
end
