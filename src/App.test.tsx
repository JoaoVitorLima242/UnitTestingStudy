import { render, screen, fireEvent } from '@testing-library/react'

import App from './App'

describe('App Component', () => {
    it('should render list items', () => {
        render(<App/>)

        expect(screen.getByText('Joao')).toBeInTheDocument()
        expect(screen.getByText('Mario')).toBeInTheDocument()
        expect(screen.getByText('Mayk')).toBeInTheDocument()
    })

    it('should be able to add new item to list', () => {
        render(<App/>)

        const addButton = screen.getByText('Adicionar')

        fireEvent.click(addButton)
        expect(screen.getByText('Novo')).toBeInTheDocument()
    })
})