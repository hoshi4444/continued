class LikesController < ApplicationController
  # before_action :logged_in_user

  def create
    @post = Post.find(params[:post_id])
    unless @post.good?(current_user)
      @post.good(current_user)
      @post.reload
      respond_to do |format|
        format.html { redirect_to request.referrer || root_url }
        format.js
      end
    end
  end

  def destroy
    @post = Like.find(params[:id]).post
    if @post.good?(current_user)
      @post.bad(current_user)
      @post.reload
      respond_to do |format|
        format.html { redirect_to request.referrer || root_url }
        format.js
      end
    end
  end
end
