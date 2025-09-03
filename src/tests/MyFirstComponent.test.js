import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import MyFirstComponent from '../components/MyFirstComponent';

test('Компонент MyFirstComponent має елемент <p>', () => {
    const { container } = render(<MyFirstComponent />);
    const textElement = container.querySelector('p');
    expect(textElement).toBeInTheDocument();
});

test('Компонент MyFirstComponent має елемент <p>, який відображує текст "Hello, React!"', () => {
    const { container } = render(<MyFirstComponent />);
    const textElement = container.querySelector('p');
    expect(textElement.textContent).toEqual('Hello, React!');
});

test('Компонент MyFirstComponent має елемент <button>', () => {
    const { container } = render(<MyFirstComponent />);
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toBeInTheDocument();
});

test('Компонент MyFirstComponent має елемент <button>, який відображує текст "Click me"', () => {
    const { container } = render(<MyFirstComponent />);
    const buttonElement = container.querySelector('button');
    expect(buttonElement.textContent).toEqual('Click me');
});

test('Компонент MyFirstComponent має елемент <button>, який при натисканні показує alert з текстом "My first alert!"', () => {
    const { container } = render(<MyFirstComponent />);
    const buttonElement = container.querySelector('button');
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation();
    fireEvent.click(buttonElement);
    expect(alertSpy).toHaveBeenCalledWith('My first alert!');
    alertSpy.mockRestore();
});