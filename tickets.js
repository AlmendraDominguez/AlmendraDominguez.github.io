function tickets() {
    const divContent = document.getElementById('comprarTicket');
    const content = ` <div class="d-flex justify-content-center">
    <div class="card-group card text-center col-4">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">Estudiante</h5>
            <p class="card-text">Tienen un descuento</p>
            <p class="card-text"><b>80%</b></p>
            <p class="card-text"><small class="text-muted">*presentar documentacion</small></p>
        </div>
        </div>
    </div>

    <div class="card-group card text-center col-4">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">Trainee</h5>
            <p class="card-text">Tienen un descuento</p>
            <p class="card-text"><b>50%</b></p>
            <p class="card-text"><small class="text-muted">*presentar documentacion</small></p>
        </div>
        </div>
    </div>

    <div class="card-group card text-center col-4">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">Junior</h5>
            <p class="card-text">Tienen un descuento</p>
            <p class="card-text"><b>15%</b></p>
            <p class="card-text"><small class="text-muted">*presentar documentacion</small></p>
        </div>
        </div>
    </div>
</div>

</div>
</div>
</section>
<section class="container-fluid">
<div class="row">
<div>
<p>VENTA</p>
<p><b>VALOR DE TICKET $200</b></p>

<input type="text" class="form-control col-6" placeholder="Nombre" aria-label="Nombre">
<input type="text" class="form-control col-6" placeholder="Apellido" aria-label="Apellido">
<input type="text" class="form-control" placeholder="Correo" aria-label="Correo">
<label for="basic-url" class="form-label">Cantidad</label>
<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Cantidad" aria-label="Cantidad">
</div>
<label for="basic-url" class="form-label">Categoria</label>
<select class="form-select" aria-label="Default select example">
    <option selected value="1">Estudiante</option>
    <option value="2">Trainee</option>
    <option value="3">Junior</option>
</select>
<input type="text" class="" style="background-color: rgba(204,229,255,255)" placeholder="Total a pagar: $">

<div>
    <button type="button" class="btn miBoton text-white col-12" style="background-color: rgba(150,201,62,255)">Borrar</button>
</div>
<br>
<div>
    <button type="button" class="btn miBoton text-white col-12" style="background-color: rgba(150,201,62,255)">Resumen</button>
</div>`;

  divContent.innerHTML = content;
}

