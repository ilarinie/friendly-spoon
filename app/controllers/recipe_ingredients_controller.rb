class RecipeIngredientsController < ApplicationController

  def create
    byebug
    @recipe_ingredient = RecipeIngredient.new(recipe_ingredient_params)
    @recipe_ingredient.save
    redirect_to :back
  end

  def destroy
    @recipe_ingredient = RecipeIngredient.find(params[:id])

    @recipe_ingredient.destroy
    redirect_to :back
  end

  private

  def recipe_ingredient_params
    params.require(:recipe_ingredient).permit(:unit_id, :amount, :ingredient_id, :recipe_id)
  end

end
