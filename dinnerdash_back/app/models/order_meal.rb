class OrderMeal < ApplicationRecord
    #Relaçôes desta Model
    belongs_to :order
    belongs_to :meal
    #Validaçôes desta Model
    validates :quantity, presence: true
end
