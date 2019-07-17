class MealController < ApplicationController
  
  before_action :set_meal, only: [:show, :update, :destroy]

  def create
    @meal = Meal.new(meal_params)
    if @meal.save
      render json: @meal ,status: :created
    else
      render json: @meal.erros, status: :unprocessable_entity
    end
  end

  def show
    render json: @meal, status: 200
  end

  def index
    @meal = Meal.order('created_at ASC');
    render json: @meal
  end

  def update
    if @meal.update_attributes(meal_params)
      render json: @meal
    else
      render json: @meal.erros ,status: :unprocessable_entity
    end
  end

  def destroy
    @meal.destroy
    render json: {status: 'SUCCESS', message:'Deleted meal', data:@meal},status: :ok
  end

  private
    def set_meal
      @meal = Meal.find(params[:id])
    end


    def meal_params
        params.permit(:name,:price,:description,:availability)
    end

end
