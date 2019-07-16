class SituationsController < ApplicationController
    before_action :set_situation, only: [:show, :update, :remove]

    # GET
    # Shows all situations
    def index
        @situations = Situation.all
        render json: @situations
    end

    # GET
    # Shows one situation by id
    def show
        render json: @situation
    end

    # POST - empty situation
    # unsaved
    def new
        @situation = Situation.new
    end

    # POST - creates a situation
    # automaticaly saves it
    def create
        @situation = Situation.new(situation_params)

        if @situation.save
            render json: @situation
        else
            render json: {erro: "Couldn't create situation"}
        end
    end

    # PUT/PATCH
    # updates an existing situation
    def update
        if @situation.update(situation_params)
            render json: @situation
        else
            render json: {msg: "Couldn't update situation"}
        end
    end

    # DELETE
    # removes all situations
    def destroy
        @situations = Situation.all

        if @situations.delete
            render json: {msg: "Situations deleted"}
        else
            render json: {erro: "Error deleting situations"}
        end
    end

    # DELETE
    # removes one situation by id
    def remove
        if @situation.delete
            render json: {msg: "Situation with id:#{@situation.id} deleted"}
        else
            render json: {erro: "Error deleting situation (id:#{@situation.id})" }
        end
    end
    
    # Private methods for setting parameters
    # and making a pattern for finding an situation
    private
        def situation_params
            params.require(:situation).permit(:description)
        end

        def set_situation
            @situation = Situation.find(params[:id])
        end
end
