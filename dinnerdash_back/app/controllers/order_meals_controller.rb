class OrderMealsController < ApplicationController
    
    before_action :set_ordermeal, only: [:show, :destroy, :update]

    def index 
        @ordermeals = OrderMeal.all
        @order = Order.all
        @meal = Meal.all
        render json: @ordermeals
    end

    def show
        @ordermeal = OrderMeal.find(params[:id])
        render json: @ordermeal, status: 200
    end
       
    def create
        @ordermeal = OrderMeal.new(params[:ordermeal])
        
        if @ordermeal.save
            render json: @ordermeal, status: :created, location: @ordermeal
        else
            render json: @ordermeal.errors, status: :unprocessable_entity
        end
    end

    def update
    if @ordermeal.update(ordermeal.params)
        render json: @ordermeal
    else
        render json: @ordermeal.errors, status: :unprocessable_entity
    end
end

    def destroy
        @ordermeal.destroy
        render json: {msg: "apagado com sucesso"}, status: :algum
    end

    private

    def set_ordermeal
        @ordermeal = OrderMeal.find(params[:id])
    end

    def ordermeal_params
        params.require(:ordermeal).permit(:quantity, :Order_id, :Meal_id)
    end
end
