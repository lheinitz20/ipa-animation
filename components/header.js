import Link from 'next/link';
import Script from 'next/script';
import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.horizontal} id="header">
            <h2>Portfolio-Animation</h2>
            <nav>
                <ul>
                    <li>
                    <Link href="/">
                        <a>Animation</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/manual">
                        <a>Handbuch</a>
                    </Link>
                    </li>
                </ul>
            </nav>
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
        <Script id="show-header">
        {`
        const body = document.querySelector('body');
        var shown = 0;
        body.addEventListener('click', function (e) {
            if(shown == 0) {
                $('#header').animate({'margin-top': '0px'});
                shown = 1;
            } else {
                $('#header').animate({'margin-top': '-100px'});
                shown = 0;
            }
        });
        `}
        </Script>
        </header>

    )

}