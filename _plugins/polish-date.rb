module DateFilter
  MONTHS = %w(stycznia lutego marca kwietnia maja czerwca lipca sierpnia września października listopada grudnia)

  def polish_date(input)
    input.strftime("%d ") + MONTHS[input.strftime("%m").to_i - 1] + input.strftime(" %Y") + " r."
  end
end

Liquid::Template.register_filter(DateFilter)