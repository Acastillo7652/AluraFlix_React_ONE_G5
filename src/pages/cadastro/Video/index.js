import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
    return (
        <PageDefault>
            <h1>Registro de vídeo</h1>

            <Link to="/cadastro/categoria">
                Registrar Categoría
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;