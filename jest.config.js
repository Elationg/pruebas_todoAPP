module.exports = {
    connectionRetryTimeout: 120000,
    testTimeout : 60000,
    testEnvironment: 'node',
    reporters: [
        "default",
        ["jest-html-reporter", {
        pageTitle: "Reporte de Pruebas Móviles",
        outputPath: "./report/test-report.html",
        includeFailureMsg: true,
        includeConsoleLog: true
        }]
    ]
};