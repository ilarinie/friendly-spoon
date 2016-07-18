class ChangeRecipeIngredientAmountToDecimal < ActiveRecord::Migration
  def change
    change_column :recipe_ingredients, :amount, :decimal
  end
end
