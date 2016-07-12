class Ingredient < ActiveRecord::Base
  has_many :recipe_ingredients

  validates :name, presence: true
  validates :name, uniqueness: { case_sensitive: false }


  def to_s
    name
  end
end
