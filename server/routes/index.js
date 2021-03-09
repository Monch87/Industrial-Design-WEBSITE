module.exports = app => {

    // Base URLS
    app.use('/api/designer', require('./project.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/files', require('./files.routes.js'))
    app.use('/api/contact', require('./contact.routes.js'))
}

