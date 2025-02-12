# Pokémon Memory Card Game

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

A memory card game built with React where players test their memory by clicking unique Pokémon without repeats. Features dynamic scoring, persistent high scores, and randomly generated Pokémon from the original 151.

## Features

- 🏆 Persistent best score tracking using localStorage
- 🌟 Random Pokémon selection from Generation I
- 🔄 Dynamic card shuffling after each click
- 📊 Real-time score tracking
- 🌀 Responsive grid layout
- ⚡ Optimized API calls with Promise.all

## Installation

```bash
git clone https://github.com/your-username/pokemon-memory-game.git
cd pokemon-memory-game
npm install
npm run dev

```

## How to Play

1. Click on any Pokémon card
2. Continue clicking new Pokémon you haven't selected before
3. Score increases with each unique selection
4. Game resets if you repeat a Pokémon
5. Try to beat your best score!

The cards shuffle after every selection to increase difficulty.

## Technologies

- React 19
- JavaScript (ES6+)
- HTML5
- CSS3
- PokeAPI
- Web Storage API

## API Usage

This project uses the [PokeAPI](https://pokeapi.co/) to fetch Pokémon data:

- Random Generation I Pokémon (IDs 1-151)
- Official artwork images
- Pokémon names
