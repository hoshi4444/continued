class CommentsController < ApplicationController
  def create
    @comment = Comment.create(text: params[:text], post_id: params[:post_id], user_id: current_user.id)
    @comment.reload

    @post = @comment.post
    @comments = @post.comments.includes(:user).order("id DESC")

    respond_to do |format|
      format.html { redirect_to post_path(params[:post_id]) }
      # format.json
      format.js
    end
  end

  private

  def comment_params
    params.permit(:text, :post_id)
  end
end
