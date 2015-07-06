
(function() {

    tinymce.PluginManager.add('abt_ref_id_parser_mce_button', function(editor, url) {
        editor.addButton('abt_ref_id_parser_mce_button', 
			{
				type: 'menubutton',
				image: url+ '/../images/book.png',
				title: "Academic Blogger's Toolkit",
				icon: true,
				menu:   [
							{
								text: 'Bibliography Tools',
								menu:   [
											// Inline Citation Menu Item
											{
												text: 'Inline Citation',
												onclick: function() {
														editor.windowManager.open({
															title: 'Insert Citation',
															body: [
																	{
																		type: 'textbox',
																		name: 'citation_number',
																		label: 'Citation Number',
																		value: ''
																	},
																	{
																		type: 'checkbox',
																		name: 'citation_checkbox',
																		checked: false,
																		label: 'Return Citation?',
																	}, 
																  ],
														    
														    onsubmit: function(e) {

														    	if (e.data.citation_checkbox) {
														            	var trailingText = (' return=TRUE]');
														            } else {
														            	var trailingText = (']');
														            }
														        
														        editor.insertContent(
														            '[cite num=&quot;' + e.data.citation_number + '&quot;' + trailingText
														            );
														    }
														});
												}
											}, 
											// Separator
											{text: '-'},
											// Single Reference Menu Item
											{
												text: 'Formatted Reference',
												onclick: function() {
													editor.windowManager.open(
														{
															title: 'Insert Formatted Reference',
															body: [
																	{
																		type: 'textbox',
																		name: 'ref_id_number',
																		label: 'PMID/PMCID/DOI',
																		value: ''
																	},
																	{
																		type: 'checkbox',
																		name: 'ref_id_include_link',
																		label: 'Include link to PubMed?'
																	},
																	{
																		type: 'label',
																		text: 'Note: DOI method rarely works. Use PMID/PMCID whenever possible.'
												                    }
												                  ],
															onsubmit: function(e) {
																if ( e.data.ref_id_include_link ) { 
																	var linkLogic = ' link=' + e.data.ref_id_include_link + ']';
																} else { 
																	var linkLogic = ']';
																}

																editor.insertContent(
																	'[ref id=&quot;' + e.data.ref_id_number + '&quot;' + linkLogic
																);
															}
														});
												}
											}
										]
							},
							{text: '-'},
							{
								text: 'Request More Tools',
								onclick: function() {
									editor.windowManager.open(
										{
											title: 'Request More Tools',
											body: [

												{
													type: 'label',
													text: "Have a feature or tool in mind that isn't available? Visit the link below to send a feature request. We'll do our best to make it happen."
												},
												{
													type: 'button',
													text: 'Send us your thoughts!',
													onclick : function() {
													                    window.open('https://trello.com/b/nFxfo6iO/academic-blogger-s-toolkit','_blank');
													                },
												}

											],
											onsubit: function() {
												return;
											}
										});
								}}

							]
						}
			);}
		);
	})
();