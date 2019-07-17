class MealCategoriesController < ApplicationController
   def index
      @meal_categories = MealCategory.all

      render json: @meal_categories, status: :ok
   end
   
   def create
      @meal_category = MealCategory.create(meal_category_params)
      
      if @meal_category.save
         render json: @meal_category, status: :created
      end
   end

   def destroy
      @meal_category = MealCategory.where(id: params[:id]).first
      @meal_category.destroy
      head 204
   end

   def show
      @meal_category = MealCategory.find(params[:id])
      render json: @meal_category, status: :ok
   end

   def update
      @meal_category = MealCategory.find(params[:id])

      if @meal_category.update(meal_category_params)
         render json: @meal_category, status: :ok
      end
   end
   private

   def meal_category_params
      params.require(:meal_category).permit(:name)
   end
end