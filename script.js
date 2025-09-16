document.addEventListener('DOMContentLoaded', () => {
    // Data for the flashcards
    const alphabet = [
        { letter: 'A', word: 'Avión', image: 'https://placehold.co/200x150/3498db/white?text=Avión' },
        { letter: 'B', word: 'Barco', image: 'https://placehold.co/200x150/e74c3c/white?text=Barco' },
        { letter: 'C', word: 'Casa', image: 'https://placehold.co/200x150/2ecc71/white?text=Casa' },
        { letter: 'D', word: 'Dedo', image: 'https://placehold.co/200x150/f1c40f/white?text=Dedo' },
        { letter: 'E', word: 'Elefante', image: 'https://placehold.co/200x150/9b59b6/white?text=Elefante' },
        { letter: 'F', word: 'Foca', image: 'https://placehold.co/200x150/e67e22/white?text=Foca' },
        { letter: 'G', word: 'Gato', image: 'https://placehold.co/200x150/1abc9c/white?text=Gato' },
        { letter: 'H', word: 'Huevo', image: 'https://placehold.co/200x150/34495e/white?text=Huevo' },
        { letter: 'I', word: 'Isla', image: 'https://placehold.co/200x150/3498db/white?text=Isla' },
        { letter: 'J', word: 'Jirafa', image: 'https://placehold.co/200x150/e74c3c/white?text=Jirafa' },
        { letter: 'K', word: 'Koala', image: 'https://placehold.co/200x150/2ecc71/white?text=Koala' },
        { letter: 'L', word: 'Luna', image: 'https://placehold.co/200x150/f1c40f/white?text=Luna' },
        { letter: 'M', word: 'Manzana', image: 'https://placehold.co/200x150/9b59b6/white?text=Manzana' },
        { letter: 'N', word: 'Nido', image: 'https://placehold.co/200x150/e67e22/white?text=Nido' },
        { letter: 'Ñ', word: 'Ñu', image: 'https://placehold.co/200x150/1abc9c/white?text=Ñu' },
        { letter: 'O', word: 'Oso', image: 'https://placehold.co/200x150/34495e/white?text=Oso' },
        { letter: 'P', word: 'Perro', image: 'https://placehold.co/200x150/3498db/white?text=Perro' },
        { letter: 'Q', word: 'Queso', image: 'https://placehold.co/200x150/e74c3c/white?text=Queso' },
        { letter: 'R', word: 'Ratón', image: 'https://placehold.co/200x150/2ecc71/white?text=Ratón' },
        { letter: 'S', word: 'Sol', image: 'https://placehold.co/200x150/f1c40f/white?text=Sol' },
        { letter: 'T', word: 'Tigre', image: 'https://placehold.co/200x150/9b59b6/white?text=Tigre' },
        { letter: 'U', word: 'Uvas', image: 'https://placehold.co/200x150/e67e22/white?text=Uvas' },
        { letter: 'V', word: 'Vaca', image: 'https://placehold.co/200x150/1abc9c/white?text=Vaca' },
        { letter: 'W', word: 'Wafle', image: 'https://placehold.co/200x150/34495e/white?text=Wafle' },
        { letter: 'X', word: 'Xilófono', image: 'https://placehold.co/200x150/3498db/white?text=Xilófono' },
        { letter: 'Y', word: 'Yate', image: 'https://placehold.co/200x150/e74c3c/white?text=Yate' },
        { letter: 'Z', word: 'Zanahoria', image: 'https://placehold.co/200x150/2ecc71/white?text=Zanahoria' }
    ];

    // DOM Elements
    const letterEl = document.getElementById('letter');
    const imageEl = document.getElementById('image');
    const wordEl = document.getElementById('word');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentIndex = 0;

    // Function to update the card content
    function updateCard(index) {
        const item = alphabet[index];
        letterEl.textContent = item.letter;
        wordEl.textContent = item.word;
        imageEl.src = item.image;
        imageEl.alt = `Imagen de ${item.word}`;
    }

    // Event listener for the 'next' button
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % alphabet.length;
        updateCard(currentIndex);
    });

    // Event listener for the 'previous' button
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + alphabet.length) % alphabet.length;
        updateCard(currentIndex);
    });

    // Initial card load
    updateCard(currentIndex);
});
