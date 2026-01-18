import { Head, router } from '@inertiajs/react';

import { Button } from '@/components/ui/button';

export default function Index() {
    return (
        <>
            <Head title="Welcome">
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link href="https://fonts.bunny.net/css?family=albert-sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
            </Head>

            <div>
                <p>Hello World</p>

                <Button onClick={() => {
                    router.get('/chirp');
                }}>Click me</Button>
            </div>
        </>
    );
}
