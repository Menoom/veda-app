/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'body': ['Source Serif Pro', 'serif'],
      },
      colors: {
        primary: '#1F1F1F',
        gold: {
          50: '#FDF7E6',
          100: '#F9EBCC',
          200: '#F2D699',
          300: '#ECC166',
          400: '#E5AC33',
          500: '#D4A574',
          600: '#B8875A',
          700: '#9C6940',
          800: '#804B26',
          900: '#642D0C',
        },
        maroon: {
          50: '#F8E8EC',
          100: '#F1D1D9',
          200: '#E3A3B3',
          300: '#D5758D',
          400: '#C74767',
          500: '#8B1538',
          600: '#7A1230',
          700: '#690F28',
          800: '#580C20',
          900: '#470918',
        },
        earth: {
          50: '#F7F5F0',
          100: '#EFEAE1',
          200: '#DFD5C3',
          300: '#CFC0A5',
          400: '#BFAB87',
          500: '#A89276',
          600: '#8F7B64',
          700: '#766452',
          800: '#5D4D40',
          900: '#44362E',
        },
        sage: {
          50: '#F4F6F2',
          100: '#E9EDE5',
          200: '#D3DBCB',
          300: '#BDC9B1',
          400: '#A7B797',
          500: '#8FA57A',
          600: '#7A8F66',
          700: '#657952',
          800: '#50633E',
          900: '#3B4D2A',
        }
      },
      backgroundImage: {
        'sandalwood': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJzYW5kYWx3b29kLXBhdHRlcm4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgICAgIDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI0ZBRjlGNyIvPgogICAgICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSIjRjBFQ0U0IiBvcGFjaXR5PSIwLjMiLz4KICAgICAgPGNpcmNsZSBjeD0iNTAiIGN5PSIyMCIgcj0iMC41IiBmaWxsPSIjRThEQ0NEIiBvcGFjaXR5PSIwLjIiLz4KICAgICAgPGNpcmNsZSBjeD0iMzAiIGN5PSI0MCIgcj0iMS41IiBmaWxsPSIjRTZEOUM2IiBvcGFjaXR5PSIwLjE1Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iMTAiIHI9IjAuNSIgZmlsbD0iI0VDRTBEMyIgb3BhY2l0eT0iMC4yNSIvPgogICAgICA8Y2lyY2xlIGN4PSIyMCIgY3k9IjUwIiByPSIxIiBmaWxsPSIjRUREMUMyIiBvcGFjaXR5PSIwLjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNzYW5kYWx3b29kLXBhdHRlcm4pIi8+Cjwvc3ZnPgo=')",
      }
    },
  },
  plugins: [],
};