/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import App from './App'
import userEvent from '@testing-library/user-event'

describe('App Component', () => {
    it('Should render list items', () => {
        render(<App />)

        expect(screen.getByText('Joao')).toBeInTheDocument()
        expect(screen.getByText('Pedro')).toBeInTheDocument()
        expect(screen.getByText('Vitor')).toBeInTheDocument()
    })
    
    it('Should be able to add new item to the lsit', () => {
        render(<App />)

        screen.debug()
        
        const addButton = screen.getByText('Add to list')
        const inputElement = screen.getByPlaceholderText('new item')

        userEvent.type(inputElement, 'Novo')
        UserEvent.click(addButton)
        
        screen.debug()

        expect(screen.getByText('Novo')).toBeInTheDocument()

    })
})
    