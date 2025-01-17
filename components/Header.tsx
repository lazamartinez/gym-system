'use client';

import { ReactNode } from 'react';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Header = () =>{

    const pathname = usePathname();

    return <header className="my-10 flex justify-between gap-5">
    <Link href="/">
        <Image src="/icons/PosadasGYMlogo.png" alt="logo" width={200} height={200} />
    </Link>

    <ul className="flex flex-row items-center gap-8">
        <li>
            <Link href="/pagina1" className={cn('text-base cursor-pointer capitalize', pathname === '/pagina1' ? 'text-light-200': 'text-light-100')}>Rutinas</Link>
        </li>
    </ul>
    </header>
};

export default Header;