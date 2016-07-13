class AddUnitIdToRecipeIngredients < ActiveRecord::Migration
  def change
    add_column :recipe_ingredients, :unit_id, :integer
  end
end
