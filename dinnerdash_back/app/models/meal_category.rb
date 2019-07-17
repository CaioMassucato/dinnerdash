class MealCategory < ApplicationRecord
   has_many :meals

   validates_length_of :name, maximum: 45
end