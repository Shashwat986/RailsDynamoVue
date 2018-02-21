class ApplicationRecord
  class UniquenessValidator < ActiveModel::EachValidator
    def validate_each(record, attribute, value)
      return if value.blank? && value != false
      r = record.class.where(attribute => value)
      if r.count > 0 && r.first.id != record.id
        record.errors[attribute] << "not unique"
      end
    end
  end
end
