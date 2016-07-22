class TagsController < ApplicationController
  
  def index
    @tags = Tag.all
  end
  
  def new
    @tag = Tag.new
  end

  def edit
   @tag = Tag.find(params[:id])
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      redirect_to :root, notice: "New tag succesfully created"
    end
  end


  private

  def tag_params
    params.require(:tag).permit(:title)
  end

end
