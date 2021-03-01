module.exports = app => {

    // Base URLS
    app.use('/api/designer', require('./project.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
}