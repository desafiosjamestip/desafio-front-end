import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string

        colors: {
            primary: string
            secondary: string
            tertiary: string

            background: string

            letter: string
            title: string
            black: string
            details: string
            
            accept: string
            decline: string
            info: string
        }
    }
}