from flask import Flask, render_template, request, session, jsonify, redirect, url_for, flash, abort

app = Flask(__name__)
app.debug = True


@app.route('/')
def hello_world():
    return render_template("main.html")


if __name__ == '__main__':
    app.run()
