class Recipe < ActiveRecord::Base
  belongs_to :user
  has_many :recipe_ingredients, dependent: :destroy
  has_many :ingredients, through: :recipe_ingredients
  has_many :notes, dependent: :destroy
  has_many :recipe_tags
  has_many :tags, through: :recipe_tags
  belongs_to :level
  belongs_to :duration


  def ratingaverage
    ratings = 0
    sum = 0
    self.notes.each do |note|
      unless note.rating.nil?
        sum+=note.rating
        ratings = ratings+1
      end
    end
    (sum / 1.00 / ratings )
  end


end
