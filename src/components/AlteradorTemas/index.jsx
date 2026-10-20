import { useState } from "react";
import "./Alternador.css"

export default function AltenadorTema() {
    const [isescuro, setIsecuro] = useState(false)
    const [mostrarDica, setMostrarDica] = useState(false)

    function AltenarTema() {
        setIsecuro(anterior => !anterior);
    }
    function AltenarDica() {
        setMostrarDica(anterior => !anterior);
    }

    return (
        <main className="main-conteiner">
            <article className={`card-exeplo ${isescuro ? 'tema-escuro-card' : ''}`}>
                <header>
                    <span className="badge">
                        2. Estado Boleando
                    </span>
                    <h3>Altenador de tema & visuabilidade</h3>
                </header>
                <div className="status-tema" aria-live="polite">
                    Modo atual: <strong>{isEscuro ? '🌙 Escuro' : '☀️ Claro'}</strong>
                </div>

                <div className="botoes-grupo">
                    <button type="button"
                    className="btn btn-tema"
                    onClick={AltenadorTema}>
                        {isescuro ? "mudar para Claro" : "mudar para escuro"}
                    </button>
                    <button type="button" 
                    className="btn btn-dica"
                    onClick={AltenarDica}
                    aria-expanded= {mostrarDica}
                    aria-controls="painel-dica-id">
                        {mostrarDica ? "ocultardica" : "mostrar dica"}
                    </button>
                </div>

                {mostrarDica &&
                (
                    <div id="painel-dica-id" className="painel-dica" role="region">
                         <strong>Dica de Estado Booleano:</strong> Estados booleanos
                          são perfeitos para alternar entre dois estados como ligado/desligado, 
                         aberto/fechado ou visível/oculto usando <code>!estadoAnterior</code>.
                    </div>
                )}

                <footer className="explicacao-box">
                    <code>const [isescuro, setIsecuro] = useState(false)</code>
                    <p>altera classes CSS dinamicamente com base em um valor true/false.</p>
                </footer>

            </article>

        </main>
    )
}