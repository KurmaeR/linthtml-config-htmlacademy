module.exports = {
	rules: {
		"attr-bans": false,
		"attr-name-style": [
			true,
			"dash"
		],
		"attr-new-line" : [true, 6], // discuss
		"attr-no-dup": true,
		"attr-no-unsafe-char": true,
		// "attr-order" : ["class", "id"],
		"attr-quote-style": [true, "double"],
		"attr-req-value": true,
		"attr-validate": true,
		"button-req-content" : true,
		"class-no-dup": true,
		"class-style" : [true, "bem"],
		"doctype-first": true,
		"doctype-html5": true,
		"fieldset-contains-legend" : true,
		"fig-req-figcaption": true,
		"focusable-tabindex-style" : true,
		"head-req-title": true,
		"head-valid-content-model": true,
		"href-style" : false,
		"html-req-lang": true,
		"html-valid-content-model": true,
		"id-class-no-ad" : false,
		"id-class-style" : [true, "bem"],
		"id-no-dup": true,
		"id-style" : [true, "bem"],
		"img-req-alt": true,
		"img-req-src": true,
		"indent-style": [
			true,
			"spaces"
		],
		"indent-width": false,
		"input-btn-req-value-or-title" : true,
		"input-radio-req-name": true,
		"input-req-label": false,
		"label-no-enc-textarea-or-select" : false,
		"label-req-for" : false,
		"lang-style" : [true, "case"],
		"line-end-style" : false,
		"line-max-len": false,
		"line-no-trailing-whitespace": true,
		"link-min-length-4" : false,
		"link-req-noopener": true,
		"table-req-caption" : false,
		"table-req-header" : false,
		"tag-bans": false,
		"tag-close": true,
		"tag-name-lowercase": true,
		"tag-name-match": true,
		"tag-self-close": false,
		"tag-req-attr" : [true, {
			"img": [
				{
					"name": "src"
				},
				{
					"name": "alt"
				}
			]}],
		"title-max-len": false,
		"title-no-dup": true,
	}
};
