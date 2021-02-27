module.exports = app => {

    // Base URLS
    app.use('/api/designer', require('./project.routes.js'))
}