##
# Monkey patch Jekyll's Page and Post classes.
module Jekyll
	class Child_Pages < Liquid::Tag

		def initialize( tag_name, markup, tokens )
			super
			@attributes = {}
			markup.scan(::Liquid::TagAttributes) do |key, value|
				@attributes[key] = value
			end
			@markup = markup
		end

		def render( context )
			site_obj = context.registers[:site]
			inner_context = String.new(context.environments.first['page']['url'])
			depth = @attributes['depth']
			"Testing"
			render_child_pages( site_obj, inner_context, depth )
		end

		def render_child_pages( site_obj, context, depth )

			output = ""

			output += "<ul>"

			inner_context = String.new(context)
			if inner_context.include? "index.html"
				inner_context.slice! "index.html"
			end

			entries = site_obj.pages.sort_by {|page_entry|[page_entry.path]}

			entries.each do |entry|

				entry_url = String.new(entry.url)

				if entry_url.include? "index.html"
					entry_url.slice! "index.html"
				end

				if site_obj.config['rtp_exclude_pages'].include? entry_url
				else
					p = entry_url.split("/")
					slug = p[-1]

					if entry_url.include? slug
						entry_url.slice! slug
					end
					q = entry_url

					if q.include? "//"
						q.slice! "//"
					end
					r = q

					current = r + "/"

					if current == inner_context
						output += "<li>"
						page_url = String.new(entry.url)
						if page_url.include? "index.html"
							page_url.slice! "index.html"
						end
						output += "<a href=\"#{site_obj.config['baseurl']}#{page_url}\">#{entry.data['title'] || entry_url}</a>"
						output += "</li>"
						if depth.to_i > 1
							output += render_child_pages( site_obj, entry.url, depth.to_i - 1 )
						end
					end
				end

			end
			output += "</ul>"
			output
		end

	end
	Liquid::Template.register_tag('child_pages', Child_Pages)
end
