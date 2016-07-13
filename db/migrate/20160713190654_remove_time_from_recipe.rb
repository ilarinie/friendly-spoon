class RemoveTimeFromRecipe < ActiveRecord::Migration
  def change
    remove_column, :recipes, :time
  end
end
