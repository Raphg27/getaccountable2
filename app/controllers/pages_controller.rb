class PagesController < ApplicationController
  def home
    if params[:locale].nil?
      @language = I18n.locale.to_s
    else
      @language = params[:locale]
    end
  end
end
