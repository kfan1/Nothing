import React from 'react';

export default function publicInfo() {
  return (
    <div>
      <div className='publicInformation'>
        <div>
          <p className='publicInfoHeaders'>Add databases seamlessly</p>
          <p className='publicInfoInfo'>
            {' '}
            Connect your database with your URI and switch between multiple databases. Add all of your tables and switch
            between them with ease. Databases and tables will be saved for future access.
          </p>
        </div>
        <img className='publicInfoPictures' src='/assets/images/Postgresql_elephant.svg.png' />
      </div>
      <hr className='publicInfoBreaks'></hr>
      <div className='publicInformation'>
        <img className='publicInfoPictures' src='/assets/images/data-science.png' />
        <div>
          <p className='publicInfoHeaders'>Simple and easy to use</p>
          <p className='publicInfoInfo'>
            {' '}
            With a graphical user interface, visualize your data in simple and digestible tables. Interact with each
            row, column, or individual item to select or deselect any record you want to collect in your query.
          </p>
        </div>
      </div>
      <hr className='publicInfoBreaks'></hr>
      <div className='publicInformation'>
        <div>
          <p className='publicInfoHeaders'>Keep Your Data Forever</p>
          <p className='publicInfoInfo'>
            {' '}
            Previous databases, tables, and queries will be saved for your future reference. Never forget how to
            structure your queries again. View your previous queries for reference and have peace of mind that all your
            data will be safe and secure.
          </p>
        </div>
        <i className='fa-solid fa-hippo big-hippo'></i>
      </div>
      <hr className='publicInfoBreaks'></hr>
      <div className='publicInformation'>
        <div className='publicSmallIcons'>
          <img className='smallLogos' src='/assets/images/React-icon.svg.png'/>
          <img className='smallLogos' src='/assets/images/redux-logo.png'/>
          <img className='smallLogos' src='/assets/images/express-js.png'/>
          <img className='smallLogos bottomLogos' src='/assets/images/mongodb.png'/>
          <img className='smallLogos bottomLogos webpack' src='/assets/images/webpack.png'/>
          <img className='smallLogos bottomLogos' src='/assets/images/bcrypt.png'/>
        </div>
        <div>
          <p className='publicInfoHeaders'>Fast and Secure</p>
          <p className='publicInfoInfo'>
            {' '}
            Built on top of React/Redux, information is updated instantly. With Express.js as the server, functionality
            is instant. Authentication provided by BCrypt and data stored in MongoDB Atlas cloud server insures industry
            leading security. Compiled with Webpack.
          </p>
        </div>
      </div>
    </div>
  );
}
