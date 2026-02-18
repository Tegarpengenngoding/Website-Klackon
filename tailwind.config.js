tailwind.config = {
    theme: {
        extend: {
            colors: {
                klackonBlue: '#3355E6',
                klackonPink: '#DA0691',
                klackonYellow: '#F5E27E',
                klackonGreen: '#6EE7B7', // Light Green/Mint from reference
                klackonCyan: '#67E8F9',
                klackonOrange: '#FF4B4C', // Requested Orange
            },
            fontFamily: {
                heading: ['Anton', 'sans-serif'],
                body: ['Montserrat', 'sans-serif'],
            },
            boxShadow: {
                'brutal': '4px 4px 0px 0px #000000',
                'brutal-lg': '8px 8px 0px 0px #000000',
            },
            fontSize: {
                'klackon-small': ['10px', '1.5'],
                'klackon-body': ['16px', '1.5'],
                'klackon-h3': ['26px', '1.3'],
                'klackon-h2': ['42px', '1.1'],
            }
        }
    }
}
