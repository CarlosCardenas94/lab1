import React from 'react'

export default function Registro() {
    return (
        <div>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Nombre y Apellido</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Telefono</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Correo electronico</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
            </div>
            <div class="row mb-3">
                    <div class="col-sm-10 offset-sm-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                        <label class="form-check-label" for="gridCheck1">
                        Acepto Terminos y condiciones.
                        </label>
                    </div>
                    </div>
                </div>
            <button type="submit" class="btn btn-primary">Registrarse</button>
        </div>
    )
}
