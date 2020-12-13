import { userProfile } from '../components/user-profile.js'; //As in design userprofile is inside header so we importing user-profile module from user-profile.js file

class Header {


  loadHeader() {

    // Invoke the methods
    userProfile.loadUserProfile(); //calling loadUserProfile method of userProfile

    console.log('Header component is loaded...')

  }

}

export let header = new Header(); //exporting the header class instance