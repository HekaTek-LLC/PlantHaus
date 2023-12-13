The categories-map section on udemy shows us how to map through the values and have them displayed on the screen

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

/_ Extra small devices (phones, 600px and down) _/
@media only screen and (min-width: 600px) {
}

// Apply for screens up to 600px
@media only screen and (max-width: 600px) {
}

// Apply for screens up to 768px
@media only screen and (max-width: 768px) {
}

// Apply for screens up to 992px
@media only screen and (max-width: 992px) {
}

// Apply for screens up to 1200px
@media only screen and (max-width: 1200px) {
}

// .reviews-container {

// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// width: 100%;
// padding: 20px 60px;

// .review-card {
// box-shadow: 0px 20px 60px -20px rgba(0, 0, 0, 0.15);
// box-sizing: border-box;
// padding: 30px 50px;
// font-family: sans-serif;
// color: white;
// font-weight: 400;
// border-radius: 15px;
// background: #fff;
// width: 100%;
// max-width: 600px;
// }

// .reviews-header {

// text-align: center;
// margin: 50px 10px;
// padding: 5px 20px;
// text-align: center;
// font-size: 2.2rem;
// font-weight: 800;
// font-family: 'Cormorant Garamond';
// }
// }

// .reviews {
// display: flex;
// flex-direction: row;
// justify-content: space-between;

// .reviews-text {
// text-align: center;
// font-size: 1rem;
// margin: 0 15px 12px;
// }
// }

<div className="review-slider-container">
<h2 style={{ textAlign: 'center' }}>REVIEW SLIDER</h2>
<Slider {...settings}>
{reviews &&
reviews.map((review) => (
<ReviewCard key={review.id} reviews={review} />
))}
</Slider>
</div>
);
};

App.js
---Navigation (/layout)
^-----Home or (/ or /home)
^------Directory Preview (/home)
^------Category Page (/category)
^-----Product Page (category/product)
^-----Shop (/shop)
-----------Categories Preview (/shop bc it still lives on the shop page)
---------------Category Page (/shop/category)
------------------Product Page (/shop/category/product)

-----------Product Page (/shop/product)
--------Auth (/auth)
--------Checkout (/checkout)
--------About (/about)
