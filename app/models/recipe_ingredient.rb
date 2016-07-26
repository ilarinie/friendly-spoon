class RecipeIngredient < ActiveRecord::Base
  belongs_to :recipe
  belongs_to :ingredient
  belongs_to :unit

  def rationalize_amount multiplier
    if amount.nil?
      ""
    else
      ramount = amount*multiplier
      fraction = ramount.modulo(1)
      if fraction == 0
        {"integer" => ramount.to_i }
      else
        if ramount-fraction == 0
          {"numerator" => fraction.rationalize(0.01).numerator, "denominator" => fraction.rationalize(0.01).denominator }
        else
          integer = (ramount-fraction).to_i
          {"integer" => integer, "numerator" => fraction.rationalize(0.01).numerator, "denominator" => fraction.rationalize(0.01).denominator}
        end
      end
  end
  end

  def ramount
    self.rationalize_amount 1
  end

  def double
    self.rationalize_amount 2
  end

  def half
    self.rationalize_amount 0.5
  end



end
