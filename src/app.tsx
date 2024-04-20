import {Component, onMount} from 'solid-js';
import {useRoutes} from '@solidjs/router';

import {routes} from './routes';
import {initFlowbite} from "flowbite";

onMount(() => {
    initFlowbite();
})

const App: Component = () => {
    const Route = useRoutes(routes);

    return (
        <>
            <main>
                <Route/>
            </main>
        </>
    );
};

export default App;
