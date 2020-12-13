// FILE: dashboard.js

import { users } from '../components/users.js'; //importing users module from users.js file
import { issues } from '../components/issues.js'; //importing issues module from issues.js file


import { header } from '../layouts/header.js'; //importing header module from header.js file
import { sidebar } from '../layouts/sidebar.js'; //importing sidebar from sidebar.js file


class Dashboard {

  loadDashboard(){

    // Invoke methods
    users.loadUsers(); //calling loadUsers method of users class
    issues.loadIssues(); //calling loadIssues method of Issues class
    header.loadHeader(); //calling loadHeader method of Header class
    sidebar.loadSidebar(); //calling loadSidebar method of sidebar class

    console.log('Dashboard component is loaded');
  }

}

export let dashboard = new Dashboard(); //creating instance of dashboard class