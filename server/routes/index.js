module.exports = app => {

    // Base URLS
    app.use('/', require('./user.routes.js'))
}