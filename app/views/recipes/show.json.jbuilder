json.(@recipe,:id,:user_id, :name, :level, :duration, :instruction, :ratingaverage)
json.recipe_ingredients(@recipe.recipe_ingredients,:id, :ingredient,:ramount,:double, :half,:unit,:instruction)
json.recipe_tags(@recipe.recipe_tags, :id, :tag)
json.notes(@recipe.notes, :id,:user_id, :note, :rating, :created_at)
json.allTags(Tag.all- @recipe.tags, :id, :title)
json.current_user_id current_user.id
