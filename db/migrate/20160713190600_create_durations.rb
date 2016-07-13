class CreateDurations < ActiveRecord::Migration
  def change
    create_table :durations do |t|
      t.string :range

      t.timestamps null: false
    end
  end
end
