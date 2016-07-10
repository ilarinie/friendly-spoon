class Recipe < ActiveRecord::Base
  belongs_to :user
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients



  def add_ingredient ingredient_id
    self.ingredients << Ingredient.find(ingredient_id)
  end
end
