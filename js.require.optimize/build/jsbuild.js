
({
    appDir: "../js",
    baseUrl: "./",
    paths: {
        "jquery": "libs/jquery",
        "backbone": "libs/backbone",
        "underscore": "libs/underscore"
    },
    dir: "../deploy",
    optimize: "closure",
    closure: {
        CompilerOptions: {},
        CompilationLevel: 'SIMPLE_OPTIMIZATIONS',
        loggingLevel: 'WARNING'
    },
    modules: [
        {
            name: "main",
            include: ["billing/billing"],
            exclude :["jquery", "backbone"]
        },
        {
            name: "main2"
           
        }
    ]
    namespace:foo
})