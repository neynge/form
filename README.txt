GITHUB PAGES UPLOAD
-------------------
Extract this ZIP and upload the files inside it to the publishing folder (repository root or /docs). Do not upload the ZIP itself or put these files inside an additional folder. GitHub Pages must publish the folder containing index.html.

All page assets use case-exact, relative URLs (./styles.css, ./app.js and ./FARUMA.TTF), so the form works at both https://username.github.io/ and https://username.github.io/repository-name/.

Open index.html in a modern browser. The form supports English and Dhivehi, RTL layout, local browser saving, dynamic rows, and printing to PDF.

DHIVEHI FONT
-------------
The included FARUMA.TTF font is embedded locally through styles.css.
Detected font name: Faruma
It is applied automatically when the page language is Dhivehi (lang="dv") or the page direction is RTL.
Keep FARUMA.TTF in the same folder as styles.css. No internet connection is required.


Translation fix: The language selector calls applyLanguage(), which replaces all data-i18n text, rebuilds translated dynamic sections, and applies Dhivehi RTL/Faruma styling. The Dhivehi translation data is valid JavaScript, and all static assets have a deployment cache version.
