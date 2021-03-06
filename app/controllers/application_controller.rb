class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :set_locale

  def set_locale
    if extract_locale_from_accept_language_header == :fr || extract_locale_from_accept_language_header == :en || extract_locale_from_accept_language_header == :de
      I18n.locale = params.fetch(:locale, extract_locale_from_accept_language_header).to_sym
    else
      I18n.locale = params.fetch(:locale, I18n.default_locale).to_sym
    end
  end
  def default_url_options
    { locale: I18n.locale == I18n.default_locale ? nil : I18n.locale }
  end

  private

  def extract_locale_from_accept_language_header
    request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first.to_sym
  end

end
