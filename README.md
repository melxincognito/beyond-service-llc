# Beyond Services LLC

<ul>
<li>Webpage for Beyond Services LLC general contracting business. Users will be able to view services offered by Beyond Services, see a photo gallery of completed past projects, contact Beyond Services via online contact form and leave a testimonial about the contracted services on the customer testimonials page.  </li>
<li>The owner of the business is able to manage the submitted testimonials on a custom built CMS from the admin dashboard. They are able to choose if a testimonial should be displayed on their webpage or if they would prefer to discard it. </li>
</ul>

---

<li>The client side has been created using <b> React.JS</b>,<b>Material-UI</b> and <b>framer-motion</b>  </li>
<li>The server side has been created using <b>firebase</b> </li>

---

## Getting Started

### 1. Clone the repository and install the dependencies using NPM.

```
git clone git@github.com:melxincognito/beyond-service-llc.git
cd beyond-service-llc
npm i
```

### 2. Create an .env file in the main directory

```
touch .env
```

### 3. Configure the following keys in the local environment

```
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID
REACT_APP_FIREBASE_DATABASE_URL
REACT_APP_EMAIL_JS_SERVICE_ID
REACT_APP_EMAIL_JS_TEMPLATE_ID
REACT_APP_EMAIL_JS_USER_ID
```

### 4. Start the application in your local environment

```
npm start
```

### 5. View the application locally

Open your browser to <b>localhost:3000</b> to view the application locally

## Dependencies

Dependencies List:

<ul>
<li>react <i>17.0.2</i></li>
<li>react-router-dom <i> 6.2.1 </i></li>
<li>react-slideshow-image </li>
<li>@emotion/react </li>
<li>@emotion/styled </li>
<li>@mui/icons-material </li>
<li>@mui/material </li>
<li>@mui/styles </li>
<li>emailjs-com </li>
<li>firebase </li>
<li>framer-motion </li>
<li>uuid</li>
<li>@testing-library/jest-dom <i>5.16.2</i> </li>
<li>@testing-library/react <i> 12.1.2 </i> </li>
<li>@testing-library/user-event <i>13.5.0 </i> </li>
</ul>

---

### Photo Galleries

Mobile Galleries

<ul>
<li>There are currently five mobile galleries being displayed on the site. The data for each f these galleries is found in the <b>data</b> folder with each JSON file named after its associated gallery. </li>
<li>The items data isn't being pulled from firebase because it doesn't render correctly when used with the <b>Lightbox</b> component being used for the mobile image gallery. The first photo is displayed correctly but it doesn't switch to the other photos using the toggle controls unless it's being pulled directly from the JSON file in the data folder. </li>

<li> Current Mobile Galleries:</li>

<ul>
<li>AirBnb Gallery</li>
<li>Bathroom Gallery</li>
<li>Kitchen Gallery</li>
<li>Ramada Gallery</li>
<li>Misc Gallery</li>
</ul>

</ul>
