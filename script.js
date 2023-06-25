//your JS code here. If required.
   document.addEventListener('DOMContentLoaded', function() {
      const playerInput = document.getElementById('playerInput');
      const submitButton = document.getElementById('submit');
      const gameContainer = document.getElementById('game');
      const message = document.querySelector('.message');
      const cells = document.querySelectorAll('.cell');

      submitButton.addEventListener('click', function() {
        const player1 = document.getElementById('player-1').value;
        const player2 = document.getElementById('player-2').value;

        if (player1 && player2) {
          playerInput.style.display = 'none';
          gameContainer.style.display = 'block';
          message.innerText = `${player1}, you're up!`;

          let currentPlayer = player1;
          let currentSymbol = 'X';

          cells.forEach(function(cell) {
            cell.addEventListener('click', function() {
              if (!cell.innerText) {
                cell.innerText = currentSymbol;
                checkWinner(currentPlayer, currentSymbol);
                currentPlayer = currentPlayer === player1 ? player2 : player1;
                currentSymbol = currentSymbol === 'X' ? 'O' : 'X';
                message.innerText = `${currentPlayer}, you're up!`;
              }
            });
          });
        }
      });

      function checkWinner(player, symbol) {
        const winningCombinations = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          [1, 4, 7],
          [2, 5, 8],
          [3, 6, 9],
          [1, 5, 9],
          [3, 5, 7]
		]}