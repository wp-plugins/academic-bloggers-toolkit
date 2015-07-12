=== Academic Blogger's Toolkit ===
Contributors: dsifford
Donate link: https://cash.me/$dsifford
Tags: academic, pmid, doi, peer-review, Google Tag Manager
Requires at least: 4.2.2
Tested up to: 4.2.2
Stable tag: 1.1.2
License: GPL3 or later
License URI: https://www.gnu.org/licenses/gpl-3.0.html

A WordPress plugin extending the functionality of WordPress for Academic Blogging.

== Description ==

Academic Blogger's toolkit is an **open source** WordPress plugin providing an all-in-one solution for effective academic blogging.

= Automatically parse references using digital identifiers (PMID, PMCID, or DOI) =
- Option to add hyperlink to PubMed.
- Available citation styles include...
    + American Medical Association (AMA) Format.
    + American Psychological Association (APA) Format.

= Anchor links to and from in-text citations =
- Smooth scrolling using jQuery.

= Append up to 3 formatted Peer Reviews to blog posts via a Frontend UI integrated on the post edit screen =
- Input areas for the Peer Review section include...
	1. Reviewer Name
	2. Reviewer Background (optional)
	3. Reviewer Twitter Handle (optional)
	4. Peer Review
	5. Reviewer Photo (interfaces with WordPress's Media Uploader)
- Option to add Author Response to Peer Reviews.

= Integration with Google Tag Manager =
- Google's newest [analytics powerhouse](http://www.google.com/tagmanager/)!
- Track individual link clicks to see who is interacting with or downloading your content and much more!

= Customizable Options =
* CSS override area to adjust the look of any content that doesn't fit your site's style.
* Currently Available Citation Styles (Feel free to request more and I'll do my best).
	1. American Medical Association (AMA)
	2. American Psychological Association (APA)


== Installation ==

1. Upload the `acadmemic-bloggers-toolkit` folder to the `/wp-content/plugins/` directory.
2. Activate the plugin through the 'Plugins' menu in WordPress.

== Frequently Asked Questions ==

= I have a suggestion for a new feature. Would you be interested in considering it? =

Absolutely! Please send all ideas to the Academic Blogger's Toolkit [Trello Board](https://trello.com/b/nFxfo6iO/academic-blogger-s-toolkit). Alternatively, you can reach out to me on Twitter [@flightmed1](https://twitter.com/flightmed1).

= I found a bug. Who should I contact? =

Yikes! I'm sorry about that. Please report all issues on the Academic Blogger's Toolkit [GitHub Repository](https://github.com/dsifford/academic-bloggers-toolkit/issues).

== Screenshots ==

1. Demo of the automatic reference parser.
2. Demo of the anchor link generator.
3. Demo of the Peer Review front-end GUI
4. Options Page Screenshot

== Changelog ==

= 1.1.2 =
* **Bugfix:** Fixed issue where citation anchor links were interfering with anchor links not created by this plugin.
* **Bugfix:** Fixed issue where users were unable to apply line breaks or simple html tags ('strong', 'em', 'a') in peer review boxes.

= 1.1.1 =
* **Feature Release:** Integration with Google Tag Manager. Starting now, you can set up individual link click tracking via Google Analytics! Use this feature to track PDF downloads, page-views, form submits, or anything else you can think of!
* **Bugfix:** Issue causing some users' Peer Review Boxes to not be formatted correctly.
* **Bugfix:** Add default citation style.
* Add uninstall hook to cleanup plugin files from database in the unfortunate event that you decide to uninstall the plugin.
* General Performance Improvements.

= 1.1 =
* Fixed issue where post excerpt wouldn't show correctly. (Thanks Brent Thoma!)

= 1.0 =
* Initial stable release.

== Upgrade Notice ==

= 1.1.2 =
* **Bugfix:** Issue where citation anchor links were interfering with anchor links not created by this plugin.

= 1.1.1 =
* **Feature Release:** Integration with Google Tag Manager. Starting now, you can set up individual link click tracking via Google Analytics! Use this feature to track PDF downloads, page-views, form submits, or anything else you can think of!
* **Bugfix:** Issue causing some users' Peer Review Boxes to not be formatted correctly.
* **Bugfix:** Add default citation style.
* Add uninstall hook to cleanup plugin files from database in the unfortunate event that you decide to uninstall the plugin.
* General Performance Improvements.

= 1.1 =
* Fixed issue where post excerpt wouldn't show correctly. (Thanks Brent Thoma!)

= 1.0 =
* Initial stable release.
