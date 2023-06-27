from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

app.config.from_object(__name__)

CORS(app, resources={r"/*":{'origins':"*"}})
# CORS(app, resources={r"/*":{'origins':'http://localhost:8080', "allow_headers":"Access-Control-Allow-Origin"}})
#Hello world
@app.route('/', methods=['GET'])
def greeting():
    return("Hello, world!")

videojuegos= [
      {'title': 'Battlefield', 'gender': 'Shooter', 'played': False},
      {'title': 'Zelda', 'gender': 'Adventure', 'played': False},
    ]

@app.route('/getAllVideojuegos', methods=['GET'])
def getAllVideojuegos():
    return jsonify(videojuegos)

@app.route('/setVideojuego', methods=['POST'])
def setVideojuego():
    response_object = {'status': 'success'}
    post_data = request.get_json()
    print(post_data)
    videojuegos.append({
        'title': post_data.get('title'),
        'gender': post_data.get('gender'),
        'played': post_data.get('played')
    })
    response_object['message'] = 'Game Added!'
    return jsonify(response_object)

@app.route('/updateVideojuego', methods=['PUT'])
def updateVideojuego():
    response_object = {'status': 'success'}
    index = request.get_json()['index']
    videojuego = request.get_json()['videojuego']
    videojuegos[index]['title'] = videojuego.get('title')
    videojuegos[index]['gender'] = videojuego.get('gender')
    videojuegos[index]['played'] = videojuego.get('played')
    response_object['message'] = 'Game Added!'
    return jsonify(response_object)

@app.route('/deleteVideojuego/<int:index>', methods=['DELETE'])
def deleteVideojuego(index):
    response_object = {'status':'success'}
    del videojuegos[index]
    response_object['message'] = 'Game Deleted!'
    return jsonify(response_object)



if __name__ == "__main__":
    app.run(debug=True)
