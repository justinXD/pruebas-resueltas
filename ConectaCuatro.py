# prueba para la funcion ConnectFourWinner -> ['R', ['x', 'x', 'x', 'x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x', 'x', 'x', 'x'], ['x', 'x', 'x', 'R', 'x', 'x', 'x'], ['x', 'x', 'x', 'R', 'x', 'x', 'x'], ['x', 'x', 'x', 'R', 'Y', 'Y', 'Y']]

def ConnectFourWinner(strArr):
    # Parse input
    turn = strArr[0]
    board = []

    for i in range(1, len(strArr)):
        row = strArr[i].replace("(", "").replace(")", "").split(",")
        board.append(row)

    ROWS = 6
    COLS = 7

    def get_drop_row(col):
        for r in range(ROWS - 1, -1, -1):
            if board[r][col] == "x":
                return r
        return None

    def is_winning_move(r, c):
        directions = [
            [(0, 1), (0, -1)],
            [(1, 0), (-1, 0)],
            [(1, 1), (-1, -1)],
            [(1, -1), (-1, 1)]
        ]

        for direction in directions:
            count = 1
            for dr, dc in direction:
                nr, nc = r + dr, c + dc
                while (
                    0 <= nr < ROWS and
                    0 <= nc < COLS and
                    board[nr][nc] == turn
                ):
                    count += 1
                    nr += dr
                    nc += dc

            if count >= 4:
                return True

        return False

    # Try each column
    for col in range(COLS):
        row = get_drop_row(col)
        if row is None:
            continue

        board[row][col] = turn

        if is_winning_move(row, col):
            return f"({row}x{col})"

        board[row][col] = "x"  # revert simulation

    return "none"


# keep this function call here
print(ConnectFourWinner(input()))
