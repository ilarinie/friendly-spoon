class AddDurationIdToRecipe < ActiveRecord::Migration
  def change
    add_column :recipes, :duration_id, :integer
  end
end
