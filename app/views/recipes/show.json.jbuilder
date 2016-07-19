json.(@recipe,:id, :name, :level, :duration, :instruction, :ratingaverage)
json.recipe_ingredients(@recipe.recipe_ingredients,:id, :ingredient,:amount,:unit)
json.notes(@recipe.notes, :id, :note, :rating, :created_at)
