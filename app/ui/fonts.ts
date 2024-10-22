//agregar una fuente de google fonts para conbinar con Inter
import { Inter, Lusitana } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700']
})
