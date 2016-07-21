class RecipeTagsController < ApplicationController

  def create
    @recipe_tag = RecipeTag.new(recipe_tag_params)
    @recipe_tag.save
    render plain: "tag saved"
  end

  def destroy
    @recipe_tag = RecipeTag.find(params[:id])
    @recipe_tag.destroy
    render plain: "tag destroyed"
  end

  def recipe_tag_params
    params.permit(:recipe_id, :tag_id)
  end

end
