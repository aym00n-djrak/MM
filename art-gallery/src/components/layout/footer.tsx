function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex items-center justify-center p-4 border-t border-gray-300 mt-8">
            <p> Rémy JOVANOVIC -
                <a href="mailto:remyj@outlook.fr"> remyj@outlook.fr </a>
                - Copyright {currentYear}
            </p>
        </footer>
    )
}

export default Footer;