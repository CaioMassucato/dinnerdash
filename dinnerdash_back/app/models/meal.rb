class Meal < ApplicationRecord
    validates :name, presence: true, length: {in: 2..45}
    validates :description, presence: true, length: {in: 2..45}
    validates :price, presence: true, numericality: {true, greater_than: 0}
    validates :available, presence: true, length: {in: 2..45}
end
 