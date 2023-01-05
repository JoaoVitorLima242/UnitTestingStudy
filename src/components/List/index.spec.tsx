/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, waitFor } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import { List } from '.'

describe('List Component', () => {
    
    it('Should render list items', () => {
        render(<List initialItems={['Joao', 'Pedro', 'Vitor']} />)
        expect(screen.getByText('Joao')).toBeInTheDocument()
        expect(screen.getByText('Pedro')).toBeInTheDocument()
        expect(screen.getByText('Vitor')).toBeInTheDocument()
        
    })
    
    it('Should be able to add new item to the list', async () => {
        render(<List initialItems={['Joao', 'Pedro', 'Vitor']} />)

        const removeButton = screen.getByTestId('Joao Remove')
        const addButton = screen.getByText('Add to list')
        const inputElement = screen.getByPlaceholderText('new item')
        
        UserEvent.type(inputElement, 'Novo')
        UserEvent.click(addButton)
        
        UserEvent.click(removeButton)
        
        await waitFor(() => {
            expect(screen.getByText('Novo')).toBeInTheDocument()
        })

        await waitFor(() => {
            expect(screen.queryByText('Joao')).not.toBeInTheDocument()
        })
    })
})
    