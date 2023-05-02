class VenuesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
    def index
        render json: Venue.all, status: :ok
    end

    def show
        venue = Venue.find_by(id: params[:id])
        render json: venue, status: :ok
    end

    def reviews
        reviews = Venue.find_by(id: params[:id]).reviews
        render json: reviews, status: :ok
    end

    def create
        venue = @current_user.venues.create!(venue_params)
        render json: venue, status: :created
    end

    def update
        venue = Venue.find_by(id: params[:id])
        venue.update!(venue_params)
        render json: venue, status: :accepted
    end

    def destroy
        venue = Venue.find_by(id: params[:id])
        venue.destroy
        head :no_content
    end

    private

    def venue_params
        params.permit(:name, :description, :city, :state, :image_url, :price, :user_id)
    end

    def render_not_found_response
        render json: {errors: ["Venue was not found."]}, status: not_found 
    end

end
