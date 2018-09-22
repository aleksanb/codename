import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'

const SecondPage = () => (
    <Layout>
        <h1>Meld deg inn som jurist  <FontAwesomeIcon icon="gavel"/></h1>

        <p>Legg til LinkedIn profilen din her og opprett bruker: </p>
        <form>
            <label>
                Url til LinkedIn profil:
                <input type="text" name="linkedin-url" />
            </label>
            <input type="submit" value="Legg til" />
        </form>
    </Layout>
)

export default SecondPage
