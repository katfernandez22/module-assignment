Created different module as follow:
	1. index.js (main index file that included in index.html file as <script type="module" src="./index.js"></script>. Note that without type="module" the module will not work
	1.1. dashboard.js (this module imported in index.js file)
	1.1.1. header.js (imported in dashboard.js file)
	1.1.1.1. user-profile.js (imported in header.js file)
	1.1.2. sidebar.js (imported in dashboard.js file)
	1.1.3. users.js (imported in dashboard.js file)
	1.1.4. issues.js (imported in dashboard.js file)
 Note: The module can be only run on server not directly file path target so use it through localhost server or live server.