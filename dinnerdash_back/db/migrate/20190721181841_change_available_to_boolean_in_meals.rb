class ChangeAvailableToBooleanInMeals < ActiveRecord::Migration[5.2]
  def change
    change_column :meals, :available, 'boolean USING CAST(available AS boolean)', true
  end
end
