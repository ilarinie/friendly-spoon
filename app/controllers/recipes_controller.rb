class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :edit, :update, :destroy,:add_ingredient]
  before_action :set_ingredients, only: [:show, :edit]
  before_action :ensure_that_signed_in, only: [:new, :edit, :create, :destroy, :update, :index, :update]
  before_action :ensure_that_public_recipe, only: [:show]
  # GET /recipes
  # GET /recipes.json
  def index
    @recipes = Recipe.all
    @alltags = Tag.all
    end

  # GET /recipes/1
  # GET /recipes/1.json
  def show
    @recipe_ingredients = RecipeIngredient.where(recipe_id:@recipe.id)
    @levels = Level.all
    @times = Duration.all
  end

  # GET /recipes/new
  def new
    @recipe = Recipe.new
    @levels = Level.all
    @durations = Duration.all
  end

  # GET /recipes/1/edit
  def edit
    @levels = Level.all
    @durations = Duration.all
    @ingredients = Ingredient.all
    @ingredient = Ingredient.new
    @recipe_ingredient = RecipeIngredient.new
    @units = Unit.all
    @tags = (Tag.all - @recipe.tags)


  end

  # POST /recipes
  # POST /recipes.json
  def create
    @recipe = Recipe.new(recipe_params)
    @recipe.user_id = current_user.id
    respond_to do |format|
      if @recipe.save
        expire_fragment('recipelist')
        format.html { redirect_to edit_recipe_path(@recipe), notice: 'Recipe was successfully created.' }
        format.json { render :show, status: :created, location: @recipe }
      else
        format.html { render :new }
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /recipes/1
  # PATCH/PUT /recipes/1.json
  def update
    respond_to do |format|
      if @recipe.update(recipe_params)
        expire_fragment('recipelist')
        format.html { redirect_to @recipe, notice: 'Recipe was successfully updated.' }
        format.json { render :show, status: :ok, location: @recipe }
      else
        format.html { render :edit }
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /recipes/1
  # DELETE /recipes/1.json
  def destroy
    @recipe.destroy
    expire_fragment('recipelist')
    respond_to do |format|
      format.html { redirect_to recipes_url, notice: 'Recipe was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def add_ingredient
    inc = Ingredient.find(params[:inc_id])
    @recipe.ingredients << inc if not @recipe.ingredients.include? inc
    redirect_to :back
  end

  private

    def ensure_that_public_recipe
      @recipe.public
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    def set_ingredients
      @recipe_ingredients = RecipeIngredient.where(recipe_id:@recipe.id)
    end
    # Never trust parameters from the scary internet, only allow the white list through.
    def recipe_params
      params.require(:recipe).permit(:name, :instruction, :public, :level_id, :duration_id)
    end
end
