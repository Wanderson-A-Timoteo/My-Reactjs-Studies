import React from 'react';
import './Form.css'

function Form() {
    return (
        <div className="form">
            <div>
                <label>Usuário:</label>
            </div>
            <div>
                <input />
            </div>
            <br />
            <div>
                <label>Email:</label>
            </div>
            <div>
                <input />
            </div>
            <br />
            <div>
                <label>Senha:</label>
            </div>
            <div>
                <input />
            </div>
            <br />
            <div>
                <label>Confirme a senha:</label>
            </div>
            <div>
                <input />
            </div>
        </div>
    )
}

export default Form;