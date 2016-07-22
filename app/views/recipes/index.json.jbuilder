json.array!(@recipes) do |recipe|
  json.extract! recipe, :id, :name, :user_id, :duration, :ratingaverage
  json.ingredients(recipe.ingredients, :name)
  json.recipe_tags(recipe.tags, :id, :title)
end
