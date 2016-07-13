class RemoveUnitFromRecipeIngredients < ActiveRecord::Migration
  def change
    remove_column :recipe_ingredients, :unit, :integer
  end
end
