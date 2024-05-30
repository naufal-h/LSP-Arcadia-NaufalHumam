export default function ApplicationLogo(props) {
    return (
        <svg
            {...props}
            enable-background="new 0 0 47.5 47.5"
            viewBox="0 0 47.5 47.5"
            id="book"
        >
            <defs>
                <clipPath id="a">
                    <path d="M0 38h38V0H0v38Z"></path>
                </clipPath>
            </defs>
            <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                <path
                    fill="#a0041e"
                    d="M0 0a4 4 0 0 0-4-4h-26a4 4 0 0 0-4 4v19.687C-34 21.896-28.209 26-26 26h20.625C-2.281 26 0 23.687 0 20.625V0Z"
                    transform="translate(36 11)"
                ></path>
                <path
                    fill="#ccd6dd"
                    d="M0 0a4 4 0 0 0-4-4h-22a4 4 0 0 0-4 4v24c0 4.119-.021 4 5 4h21a4 4 0 0 0 4-4V0Z"
                    transform="translate(34 7)"
                ></path>
                <path
                    fill="#e1e8ed"
                    d="M0 0a3 3 0 0 0-3-3h-24a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V0Z"
                    transform="translate(32 6)"
                ></path>
                <path
                    fill="#be1931"
                    d="M0 0a4 4 0 0 0-4-4h-21a4 4 0 0 0-4 4v22a4 4 0 0 0 4 4h21a4 4 0 0 0 4-4V0Z"
                    transform="translate(32 5)"
                ></path>
                <path
                    fill="#dd2e44"
                    d="M0 0a4 4 0 0 0-4-4h-19a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h19.335C-1.456 24 0 22.544 0 20.335V0Z"
                    transform="translate(30 5)"
                ></path>
                <path
                    fill="#a0041e"
                    d="M0 0c-1.687 0-1.731 1.922-1 2.75C-.168 3.691 1.125 4 3.438 4H5v2H2.281C-1.687 6-5 3.5-5 .625V-26a4 4 0 0 1 4-4h2V0H0z"
                    transform="translate(7 31)"
                ></path>
            </g>
        </svg>
    );
}
