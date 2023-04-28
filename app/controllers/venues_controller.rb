class VenuesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    def index
        render json: Venue.all, status: :ok
    end

    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        venue = Venue.find_by(id: params[:id])
        venue.update!(venue_params)
        render json: venue, status: :accepted
    end

    def destroy
        venue = Venue.find_by(id: params[:id])
        veune.destroy
        head :no_content
    end

    private

    def venue_params
        params.permit(:name, :description, :city, :state, :image_url, :price, :user_id)
    end

    def render_not_found_response
        render json: {errors: ["Venue was not found."]}, status: not_found 
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invali.record.errors }, status: :unprocessable_entity
    end

end
