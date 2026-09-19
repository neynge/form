Open index.html in a modern browser. The form supports English and Dhivehi, RTL layout, local browser saving, dynamic rows, and printing to PDF.

DHIVEHI FONT
-------------
The included FARUMA.TTF font is embedded locally through styles.css.
Detected font name: Faruma
It is applied automatically when the page language is Dhivehi (lang="dv") or the page direction is RTL.
Keep FARUMA.TTF in the same folder as styles.css. No internet connection is required.


Translation fix: The language selector now calls applyLanguage(), which replaces all data-i18n text, rebuilds translated dynamic sections, and applies Dhivehi RTL/Faruma styling. A cache-busting script version was added.
