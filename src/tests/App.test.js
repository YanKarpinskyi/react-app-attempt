import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Компонент App має елемент <h1>', () => {
  const { container } = render(<App />);
  const nameElement = container.querySelector('h1');
  expect(nameElement).toBeInTheDocument();
});

test('Компонент App має елемент <h1>, який відображує якийсь текст', () => {
  const { container } = render(<App />);
  const nameElement = container.querySelector('h1');
  expect(nameElement.textContent).not.toEqual('');
});

test('Компонент App має елемент <img>', () => {
  const { container } = render(<App />);
  const nameElement = container.querySelector('img');
  expect(nameElement).toBeInTheDocument();
});

test('Компонент App має елемент <img>, який показує зображення за посиланням https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', () => {
  const { container } = render(<App />);
  const reactLogoElement = container.querySelector('img');
  expect(reactLogoElement).toHaveAttribute(
    'src',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
  );
});

test('Компонент App має елемент <a>', () => {
  const { container } = render(<App />);
  const linkElement = container.querySelector('a');
  expect(linkElement).toBeInTheDocument();
});

test('Компонент App має елемент <a>, який відображує текст "React doc"', () => {
  const { container } = render(<App />);
  const linkElement = container.querySelector('a');
  expect(linkElement.textContent).toEqual('React doc');
});

test('Компонент App має елемент <a>, посилання якого веде на https://react.dev/', () => {
  const { container } = render(<App />);
  const linkElement = container.querySelector('a');
  expect(linkElement).toHaveAttribute(
    'href',
    'https://react.dev/'
  );
});


test('Компонент App містить компонент MyFirstComponent, який відображає елемент <p> та елемент <button>', () => {
  const { container } = render(<App />);
  const textElement = container.querySelector('p');
  const buttonElement = container.querySelector('button');
  expect(textElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});