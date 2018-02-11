# TODO: Add support for Production
Dynamoid.configure do |config|
  config.namespace = nil
  config.endpoint = Rails.application.secrets.dynamodb_url
end
