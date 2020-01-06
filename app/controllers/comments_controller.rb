class CommentsController < ApplicationController
  def create
    @comment = Comment.create(text: params[:text], post_id: params[:post_id], user_id: current_user.id)
    respond_to do |format|
      format.html { redirect_to tweet_path(params[:post_id])  }
      format.json
    end
  end

  private
  def comment_params
    params.permit(:text, :post_id)
  end
end
