import { render, screen, fireEvent, waitFor, getByText } from '@testing-library/react'
import userEvent  from '@testing-library/user-event'

import App from './App'

describe('App Component', () => {
    it('should render list items', () => {
        render(<App/>)

        expect(screen.getByText('Joao')).toBeInTheDocument()
        expect(screen.getByText('Mario')).toBeInTheDocument()
        expect(screen.getByText('Mayk')).toBeInTheDocument()
    })

    it('should be able to add new item to list', async () => {
        render(<App/>)

        const inputElement = screen.getByLabelText('New item', {selector: 'input'})
        const addButton = screen.getByText('Adicionar')
        
        userEvent.type(inputElement, 'Novo')
        userEvent.click(addButton)

        await waitFor(() => {
            expect(screen.getByText('Novo')).toBeInTheDocument()
        })
    })
})