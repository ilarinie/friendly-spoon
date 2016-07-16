class AddInstructionToRecipeIngredient < ActiveRecord::Migration
  def change
    add_column :recipe_ingredients, :instruction, :string
  end
end
