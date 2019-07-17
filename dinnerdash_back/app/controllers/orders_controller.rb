class OrdersController < ApplicationController
    
    before_action :set_order, only: [:show, :update, :destroy]
    
    def index 
        @orders = Order.all
    
    render json: @orders
    end

    def show
        @order = Order.find(params[:id])
        render json: @order, status: 200
    end

def create
    @order = Order.new(order_params)

    if @order.save
        render json: @order, status: :created, location: @order 
    else
        render json: @order.errors, status: :unprocessable_entity
end
end


def update
   if @order.update(order_params)
    render json: @order
   else
    render json: @order.errors, status: :unprocessable_entity
   end 
end

def destroy
    @order.destroy
    render json: {msg: "apagado com sucesso"}, status: :algum
end

private

def set_order
    @order = Order.find(params[:id])
end
    
#parâmetos que vâo poder ser recebidos no body do request

    def order_params
        params.require(:order).permit(:price)
    end
end