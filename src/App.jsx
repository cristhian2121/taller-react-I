import React from "react";
import './App.css';

// Components
import { CountriesList } from './components/CountriesList/CountriesList'
import { HeaderComponent } from './components/Header/Header'

// Lo unico que hereda son las clases
export class HomeComponent extends React.Component {

    name = "Cris"

    /**
     * Hay dos formas de forzar a que uncomponente se renderice 
     * 1. por props: cuando el padre le envia pros
     * 2. Por state: cuando el PROPIO componente cambia su estado o variable tipo state
     */

    // This is HomeComponent
    constructor(params){        
        super()
        console.log('Soy el constructor', params);
        this.last = params.lastName
        this.changeName = this.changeName.bind(this) // pasar el this
        this.state = {
            last: params.lastName,
            city: 'asdasd',

        }
    }

    changeName() {
        console.log('Change name');
        this.setState({
            last: "Del",
            city: 'Medellin'
        })
    }
    
    render(){
        // Cuando uso HTML el this desaparece ¿Cual es el this de HTML?
        // this is HTML
        return (
            <div>
                <HeaderComponent />
                <p className="amor"> My name:
                    <span className="hola">{this.name} - {this.state.last}</span>
                </p>
                <p className="pepe">{this.state.city}</p>
                <button onClick={this.changeName}>click</button>
                <CountriesList />
            </div>
        )
    }    

    componentDidMount(){
        console.log('Termine de renderizar')
    }

    componentDidUpdate(){
        console.log('Actualizaron algo')
    }

    componentWillUnmount() {
        console.log('Me mataron!!!');
    }

    


}