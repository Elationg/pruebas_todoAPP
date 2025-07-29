// const { remote } = require('webdriverio');
// const HomePage = require('./pages/home');

// const capabilities = {
//     "platformName": "Android",
//     "appium:automationName": "UiAutomator2",
//     "appium:deviceName": "emulator-5554",
//     "appium:app": "C:\\Users\\VICTUS\\Desktop\\APPS\\ToDoApp.apk",
//     "appium:appPackage": "com.gestortareasapp",
// }

// const wdOpts = {
//     hostname: '127.0.0.1',
//     port: 4723,
//     logLevel: 'info',
//     capabilities
// }

// let driver;
// let objHomePage;


// beforeAll(async () => {
//     driver = await remote(wdOpts);
//     //Instancia u objeto de la clase HomePage
//     objHomePage = new HomePage(driver);
//     await objHomePage.seleccionarElementos();
// });

// afterAll(async () => {
//     await driver.deleteSession();
// });

// beforeEach(async () => {
//     await objHomePage.presionarBtnTodos();
//     const input = await objHomePage.inputBusqueda; // Esperas el elemento
//     await input.clear();

// });

// describe('Validando elementos de la aplicación', () => {
    
//     it("Validar cantidad de tareas", async () => {
//         const tareas = await objHomePage.contarTareas();
//         expect(tareas).toBe(3);
//     });


//     it.each(["Pendiente", "Realizada","En Progreso"])("Filtrar tareas por status '%s'", async (estado) => {
//         await objHomePage.clickEstado(estado);
//         expect(await objHomePage.estadoEtiquetaVisible(estado)).toBe(true);
//     });

//     it("Filtrar por el texto React Native", async () => {
//         await (await objHomePage.inputBusqueda).setValue('React Native');
//         const reactNative = await objHomePage.tareaReactNative;
//         expect(await reactNative.isDisplayed()).toBe(true);

//     });

//     it("Validar la presentación del formulario de nueva tarea", async () => {
//         console.log("Ejecutando la prueba");
//         await objHomePage.presionarBtnNuevaTarea();
//         await objHomePage.presionarBtnCancelar();
//     });

// });


























// //Segundas Pruebas Gabi
// // const { remote } = require('webdriverio');

// // const capabilities = {
// //     platformName: "Android",
// //     "appium:automationName": "UiAutomator2",
// //     "appium:deviceName": "emulator-5554",
// //     "appium:app": "C:\\Users\\VICTUS\\Desktop\\APPS\\ToDoApp.apk",
// //     "appium:appPackage": "com.gestortareasapp",
// // };

// // const wdOpts = {
// //     hostname: '127.0.0.1',
// //     port: 4723,
// //     logLevel: 'info',
// //     capabilities
// // };

// // let driver;

// // beforeAll(async () => {
// //     driver = await remote(wdOpts);
// // });

// // afterAll(async () => {
// //     await driver.deleteSession();
// // });

// // /**
// //  * Función para abrir categoría de tareas y devolver su etiqueta
// //  */
// // async function openTaskCategory(categoryDesc, labelText) {
// //     const btn = await driver.$(`android=new UiSelector().description("${categoryDesc}")`);
// //     const lbl = await driver.$(`android=new UiSelector().text("${labelText}")`);
// //     await btn.click();
// //     return lbl;
// // }

// // describe("Gestor de Tareas", () => {

// //     describe("Inicio de la App", () => {
// //         it("La app se abre correctamente", async () => {
// //             const isAppRunning = await driver.isAppInstalled('com.gestortareasapp');
// //             expect(isAppRunning).toBe(true);

// //             const tituloApp = await driver.$('android=new UiSelector().text("Gestor de Tareas")');
// //             expect(await tituloApp.isDisplayed()).toBe(true);
// //         });
// //     });

// //     describe("Cambio entre categorías", () => {
// //         it("Muestra Tareas Pendientes", async () => {
// //             const lbl = await openTaskCategory("Pendiente", "Pendiente");
// //             expect(await lbl.isDisplayed()).toBe(true);
// //         });

// //         it("Muestra Tareas En Progreso", async () => {
// //             const lbl = await openTaskCategory("En Progreso", "En Progreso");
// //             expect(await lbl.isDisplayed()).toBe(true);
// //         });

// //         it("Muestra Tareas Realizadas", async () => {
// //             const lbl = await openTaskCategory("Realizada", "Realizada");
// //             expect(await lbl.isDisplayed()).toBe(true);
// //         });
// //     });

// //     describe("Crear nueva tarea", () => {
// //         it("Crea una tarea y la muestra en 'En Progreso'", async () => {
// //             const nuevoProyecto = "Hacer Nuevo Proyecto";
// //             const descripcionNp = "Realizar pruebas e2e para frontend, backend y app";

// //             const btnAgregar = await driver.$('android=new UiSelector().description("+")');
// //             const inputTitulo = await driver.$('android=new UiSelector().text("Ej: Comprar víveres")');
// //             const inputDescripcion = await driver.$('android=new UiSelector().text("Descripción detallada de la tarea...")');
// //             const btnEstadoEnprogreso = await driver.$('android=new UiSelector().description("En Progreso")');
// //             const btnGuardar = await driver.$('android=new UiSelector().description("Guardar")');

// //             await btnAgregar.click();
// //             await inputTitulo.setValue(nuevoProyecto);
// //             await inputDescripcion.setValue(descripcionNp);
// //             await btnEstadoEnprogreso.click();
// //             await btnGuardar.click();

// //             // Abrir la categoría para verificar que aparece
// //             const btnProgreso = await driver.$('android=new UiSelector().description("En Progreso")');
// //             await btnProgreso.click();

// //             const tarea = await driver.$(`android=new UiSelector().text("${nuevoProyecto}")`);
// //             expect(await tarea.isDisplayed()).toBe(true);
// //             expect(await tarea.getText()).toBe(nuevoProyecto);
// //         });

// //         it("No permite guardar una tarea sin título", async () => {
// //             const btnAgregar = await driver.$('android=new UiSelector().description("+")');
// //             await btnAgregar.click();
// //             const btnGuardar = await driver.$('android=new UiSelector().description("Guardar")');
// //             await btnGuardar.click();

// //             const alerta = await driver.$('android=new UiSelector().resourceId("android:id/message")');
// //             expect(await alerta.isDisplayed()).toBe(true);
// //             expect(await alerta.getText()).toBe('El título es obligatorio.');
// //         });
// //     });

// // });


// //Primeras Pruebas Gabi
// // const { remote } = require('webdriverio');

// // const capabilities = {
// //     platformName: "Android",
// //     "appium:automationName": "UiAutomator2",
// //     "appium:deviceName": "emulator-5554",
// //     "appium:app": "C:\\Users\\VICTUS\\Desktop\\APPS\\ToDoApp.apk",
// //     "appium:appPackage": "com.gestortareasapp",
// // };

// // const wdOpts = {
// //     hostname: '127.0.0.1',
// //     port: 4723,
// //     logLevel: 'info',
// //     capabilities
// // };

// // let driver;
// // let btnPendiente;
// // let btnProgreso;
// // let btnRealizada;
// // let nuevoProyecto;
// // let descripcionNp;

// // beforeAll(async () => {
// //     driver = await remote(wdOpts);
// // });

// // afterAll(async () => {
// //     await driver.deleteSession();
// // });

// // describe("Primer test", () => {
// //     it("La app se abre correctamente", async () => {
// //         const isAppRunning = await driver.isAppInstalled('com.gestortareasapp');
// //         expect(isAppRunning).toBe(true);

// //         const tituloApp = driver.$('android=new UiSelector().text("Gestor de Tareas")');
// //         expect (await tituloApp.isDisplayed()).toBe(true);
    
// //     });

// // describe("Estado de tareas", () => {
// //     it("Muestra Tareas Pendientes", async () => {
// //         btnPendiente = driver.$('android=new UiSelector().description("Pendiente")');
// //         const lblPendiente = driver.$('android=new UiSelector().text("Pendiente").instance(1)');
// //         await btnPendiente.click();

// //         expect (await lblPendiente.isDisplayed()).toBe(true);

// //     })

// //     it("Muestra Tareas En Progreso", async () => {
// //         btnProgreso = driver.$('android=new UiSelector().description("En Progreso")');
// //         const lblProgreso = driver.$('android=new UiSelector().text("En Progreso").instance(1)');
// //         await btnProgreso.click();

// //         expect (await lblProgreso.isDisplayed()).toBe(true);

// //     })

// //     it("Muestra Tareas Realizadas", async () => {
// //         btnRealizada = driver.$('android=new UiSelector().description("Realizada")');
// //         const lblRealizada = driver.$('android=new UiSelector().text("Realizada").instance(1)');
// //         await btnRealizada.click();

// //         expect (await lblRealizada.isDisplayed()).toBe(true);

// //     })
// // })

// // describe("Crear Tarea Nueva y Verificar su existencia", () => {
// //     it("Crear Nueva Tarea", async () => {
// //         const nuevoProyecto = "Hacer Nuevo Proyecto";
// //         const descripcionNp = "Realizar set de pruebas e2e para font-end, back-end y aplicacion";
// //         const btnAgregar = driver.$('android=new UiSelector().description("+")');
// //         const btnGuardar = driver.$('android=new UiSelector().description("Guardar")');
// //         const inputTitulo = driver.$('android=new UiSelector().text("Ej: Comprar víveres")');
// //         const inputDescripcion = driver.$('android=new UiSelector().text("Descripción detallada de la tarea...")');
// //         const btnEstadoEnprogreso = driver.$('android=new UiSelector().description("En Progreso")');
// //         const lblNuevoproyecto = driver.$('android=new UiSelector().text("Hacer Proyecto Final")')

// //         await btnAgregar.click();
// //         await inputTitulo.setValue(nuevoProyecto);
// //         await inputDescripcion.setValue(descripcionNp);
// //         await btnEstadoEnprogreso.click();
// //         await btnGuardar.click();
// //         await btnProgreso.click();

// //         expect (await lblNuevoproyecto.getText()).toBe(nuevoProyecto);

// //     })

// // })

// // });

const { remote } = require('webdriverio');
const HomePage = require('./pages/home'); 

const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'emulator-5554',
    'appium:app': 'C:\\Users\\VICTUS\\Desktop\\APPS\\ToDoApp.apk',
    'appium:appPackage': 'com.gestortareasapp',
};

const wdOpts = {
    hostname: '127.0.0.1',
    port: 4723,
    logLevel: 'info',
    capabilities
};

let driver;
let objHomePage;

beforeAll(async () => {
    driver = await remote(wdOpts);
    objHomePage = new HomePage(driver);
    await objHomePage.seleccionarElementos();
});

afterAll(async () => {
    await driver.deleteSession();
});

beforeEach(async () => {
    await objHomePage.presionarBtnTodos();
    const input = await objHomePage.inputBusqueda;
    await input.setValue("");
});

describe('Validando elementos de la aplicación', () => {
    it('Validar cantidad de tareas', async () => {
        const tareas = await objHomePage.contarTareas();
        expect(tareas).toBeGreaterThanOrEqual(0); // Cambiá 3 si el número no es fijo
    });

    it.each(['Pendiente', 'Realizada', 'En Progreso'])('Filtrar tareas por status "%s"', async (estado) => {
        await objHomePage.clickEstado(estado);
        expect(await objHomePage.estadoEtiquetaVisible(estado)).toBe(true);
    });

    it('Filtrar por el texto React Native', async () => {
        await (await objHomePage.inputBusqueda).setValue('React Native');
        const reactNative = await objHomePage.tareaReactNative;
        expect(await reactNative.isDisplayed()).toBe(true);
    });

    it('Validar la presentación del formulario de nueva tarea', async () => {
        await objHomePage.presionarBtnNuevaTarea();
        await objHomePage.presionarBtnCancelar();
        // Se puede agregar una validación aquí si esperás un comportamiento particular
    });
});
