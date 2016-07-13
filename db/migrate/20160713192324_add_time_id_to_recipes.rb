class AddTimeIdToRecipes < ActiveRecord::Migration
  def change
    add_column :recipes, :time_id, :integer
  end
end
