class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    #NOT NEEDED
    def index
        render json: Review.all, status: :ok
    end

    #UPDATE THIS TO ATTACH REVIEW TO A VENUE
    def create
        review = @current_user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find_by(id: params[:id])
        review.update!(review_params)
        render json: review, status: :accepted
    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:title, :comment, :user_id, :space_id)
    end

    def render_not_found_response
        render json: {errors: ["Review was not found."]}, status: not_found 
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

end

