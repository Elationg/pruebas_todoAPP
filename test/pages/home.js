class HomePage {

    constructor(driver) {
        this.driver = driver;
    }

    //Selectores
    selectores = {
        inputBusqueda: '//android.widget.EditText[@text="Buscar por título..."]',
        statusTareas: {
            'Todos': 'android=new UiSelector().text("Todos")',
            'Pendiente': 'android=new UiSelector().text("Pendiente")',
            'En Progreso': 'android=new UiSelector().text("En Progreso")',
            'Realizada': 'android=new UiSelector().text("Realizada")',
        },
        lista: 'android=new UiSelector().className("android.view.ViewGroup").instance(5)',

        tituloDiagoloTarea: 'new UiSelector().text("Nueva Tarea")',
    }

    async seleccionarElementos() {
        console.log("Seleccionando el elemento");
        this.btnAgregarTarea = await this.driver.$('//android.view.ViewGroup[@content-desc="+"]');
        this.btnCancelar = await this.driver.$('//android.view.ViewGroup[@content-desc="Cancelar"]');
        this.btnGuardar = await this.driver.$('//android.view.ViewGroup[@content-desc="Guardar"]');
        this.btnTodos = await this.driver.$('//android.view.ViewGroup[@content-desc="Todos"]');
        this.btnPendiente = await this.driver.$('//android.view.ViewGroup[@content-desc="Pendiente"]');
        this.btnEnProgreso = await this.driver.$('//android.view.ViewGroup[@content-desc="En Progreso"]');
        this.btnRealizada = await this.driver.$('//android.view.ViewGroup[@content-desc="Realizada"]');
    }

    get listaTareas() {
        return this.driver.$$('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup');
    }

    async contarTareas() {
        const tareas = await this.listaTareas;
        return tareas.length;
    }

    async presionarBtnTodos() {
        await this.btnTodos.click();
    }

    async presionarBtnNuevaTarea() {
        await this.btnAgregarTarea.click();
    }

    async presionarBtnCancelar() {
        await this.btnCancelar.click();
    }

    get inputBusqueda() {
        return this.driver.$('android=new UiSelector().text("Buscar por título...")');
    }

    get tareaReactNative() {
        return this.driver.$('android=new UiSelector().text("Crear proyecto React Native")');
    }

    async clickEstado(nombreEstado) {
        const selector = `//android.view.ViewGroup[@content-desc="${nombreEstado}"]`;
        const btn = await this.driver.$(selector); 
        await btn.click();
    }

    async estadoEtiquetaVisible(nombreEstado) {
        const etiqueta = await this.driver.$(this.selectores.statusTareas[nombreEstado]);
        return etiqueta.isDisplayed();
    }
}

module.exports = HomePage;