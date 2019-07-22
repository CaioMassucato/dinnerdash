class Meal < ApplicationRecord
    has_many :order_meal
    belongs_to :meal_category
    has_one_attached :image

    validates :name, presence: true, length: {in: 2..45}
    validates :description, presence: true, length: {in: 2..45}
    validates :price, presence: true, numericality: {greater_than: 0}
    validates :available, presence: true, length: {in: 2..45}
end
 