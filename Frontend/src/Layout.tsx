import { useState } from 'react'

import Header from './components/Header.tsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    const [search, setSearch] = useState('');

    return (
        <>
            <Header search={search} setSearch={setSearch}/>
            <main>
                <Outlet context={{ search }} />
            </main>
        </>
    )
}

export default Layout