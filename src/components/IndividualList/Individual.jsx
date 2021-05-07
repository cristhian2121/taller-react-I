import React, { useState } from "react"

export const IndividualComponent = ({ name, capital, population }) => {
    // Como siempre se para por parametros un objeto yo
    // puedo destruirlo
    // Timezone, Continente=region, moneda=currencies.name, idioma
    return(
        <div className="row">
            Nombre: {name} - Capital: {capital} - Población: {population}
        </div>
    )

}

