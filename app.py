from flask import Flask
from flask import render_template
app = Flask(__name__)


@app.route('/dice_test')
def test_game():
    return render_template('dice.html')

@app.route('/board_test')
def board_test():
    return render_template('board.html')


if __name__ == '__main__':
    app.run(debug=True)
